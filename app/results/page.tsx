"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import useFetchTasks from "../hooks/useFetch";

export const Report = () => {
  const searchParams = useSearchParams();

  const searchFromDate = searchParams.get("date");
  const searchSymbol = searchParams.get("symbol");
  const { fetchData, responseData } = useFetchTasks();

  useEffect(() => {
    fetchData(`/api/summarise/${searchSymbol}/${searchFromDate}`)
  },[]);

  const responses = responseData.responses
  console.log("responses", responses)

  let averageScore;
  if (responses.length > 0) {
    averageScore =  responses?.reduce((sum, response) => {
      const score = response.article_sentiment_analysis[0].score;
      return sum + score;
    }, 0) / responses.length;
  } else {
    averageScore =  0
  }

  console.log("averageScore", averageScore)

    // Determine the color class based on the average score
  let scoreColorClass = "";
  if (averageScore > 6) {
    scoreColorClass = "red-500";
  } else if (averageScore >= 4 && averageScore <= 6) {
    scoreColorClass = "gray-500";
  } else {
    scoreColorClass = "green-500";
  }

  // Determine the color class based on the label
  const getLabelColorClass = (label) => {
    switch (label) {
      case "positive":
        return "red-500";
      case "negative":
        return "green-500";
      case "neutral":
        return "gray-500";
      default:
        return "";
    }
  };

  return (
    <>
      <main>
        <article className="border-2 border-primary  h-auto flex flex-col items-start rounded-md my-8 bg-white ">
          <div className="flex items-center p-10 h-20 rounded-md bg-primary w-full">
            <h1 className="text-white text-xl">Overall</h1>
          </div>

          <div className=" w-full  p-10 grid grid-cols-3 place-items-center ">
            <div className="flex flex-col items-center">
              <h1 className="text-primary text-4xl ">{searchSymbol}</h1>
              <p className="text-primary text-lg"> From {searchFromDate}</p>
            </div>
            <div className="col-span-2 flex flex-col gap-4 justify-center items-center">
              <div
                className={`w-40 h-40 rounded-full flex justify-center items-center border-8 border-${scoreColorClass}`}
              >
                <h1 className={`text-4xl text-${scoreColorClass}`}>
                  {averageScore.toFixed(4)}
                </h1>
              </div>
              <p className={`text-2xl text-${scoreColorClass} font-semibold`}>
                Average Sentiment Score
              </p>
            </div>
          </div>
        </article>

        <article className="mb-0 border-2 border-primary  h-auto flex flex-col items-start rounded-md my-8 bg-white ">
          <div className="flex items-center p-10 h-20 rounded-md bg-primary w-full">
            <h1 className="text-white text-xl">News</h1>
          </div>
          <div className="p-10">
            <ul>
              {responses?.map((response, index) => (
                <li className="p-4" key={index}>
                  <h2
                    className={`text-${getLabelColorClass(
                      response.article_sentiment_analysis[0].label,
                    )}`}
                  >
                    {response.article_sentiment_analysis[0].label}
                  </h2>
                  <a
                    href={response.article_url}
                    target="_blank"
                    className="hover:font-bold hover:cursor-pointer text-primary"
                  >
                    <p>{response.article_name}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <div className="p-6 bg-white mt-0">
          <Link href="/market-options">
            <button className="btn-large p-0 m-0">Do another search!</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Report;
