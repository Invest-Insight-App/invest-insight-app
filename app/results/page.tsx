"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const dummieData = {
  responses: [
    {
      article_sentiment_analysis: [
        {
          label: "positive",
          score: 0.9983893632888794,
        },
      ],
      article_name:
        "TaxAct Reaches Multimillion-Dollar Settlement In Online Privacy Suit",
      article_description:
        "TaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential taxpayer information.",
      article_url:
        "https://www.forbes.com/sites/kellyphillipserb/2024/02/29/taxact-reaches-multimillion-dollar-settlement-in-online-privacy-suit/",
      article_snippet:
        "Privacy concerns getty\n\nTaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential ...",
    },
    {
      article_sentiment_analysis: [
        {
          label: "neutral",
          score: 0.9998630285263062,
        },
      ],
      article_name:
        "Warren Buffett’s 35 Best Quotes About Business, Investing, and Life",
      article_description:
        "In this piece, we will take a look at Warren Buffett's 35 best quotes about business, investing, and life.",
      article_url:
        "https://www.insidermonkey.com/blog/warren-buffetts-35-best-quotes-about-business-investing-and-life-1261880/",
      article_snippet:
        "In this piece, we will take a look at Warren Buffett’s 35 best quotes about business, investing, and life. If you want to skip our introduction to the world?...",
    },
  ],
  summary: [
    {
      article_summary:
        "TaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential information. Since 1998, TaxAct customers e-filed over 90 million tax returns.",
      combined_text:
        "Privacy concerns getty\n\nTaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential ... Those platforms included <em>Meta</em> <em>Platforms</em>, <em>Inc</em>. (formerly referred to as Facebook), Google, and Google Double Click.\n\nAccording to court documents, since 1998, TaxAct customers e-filed over 90 million tax returns.",
    },
    {
      article_summary:
        "Warren Buffett's 35 best quotes about business, investing, and life. We take a look at some of the firms that have become trillion dollar business enterprises.",
      combined_text:
        "In this piece, we will take a look at Warren Buffett’s 35 best quotes about business, investing, and life. If you want to skip our introduction to the world?... (NASDAQ:AMZN) and <em>Meta</em> <em>Platforms</em>, <em>Inc</em>. (<em>NASDAQ:META</em>). While these were not chosen by Buffett himself, the firms do have enduring competitive advantages that have seen them become trillion dollar business enterprises that are key players in valuable and high growth industries such as e-Commerce and artificial intelligence.",
    },
  ],
};

export const Report = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("searchParams", searchParams.get("date"));
    console.log("searchParams", searchParams.get("exchange"));
  });

  return (
    <>
      <main>
        <article className="border-2 border-primary  h-auto flex flex-col items-start rounded-md my-8 bg-white ">
          <div className="flex items-center p-10 h-20 rounded-md bg-primary w-full">
            <h1 className="text-white text-xl">Overall</h1>
          </div>

          <div className=" w-full  p-10 grid grid-cols-3 place-items-center ">
            <div className="flex flex-col items-center">
              <h1 className="text-primary text-4xl ">Nasdaq</h1>
              <p className="text-primary text-lg"> From 10/02/2023</p>
            </div>
            <div className="col-span-2 flex flex-col gap-4 justify-center items-center">
              <div className="w-40 h-40 rounded-full flex justify-center items-center border-8 border-red-500">
                <h1 className=" text-4xl text-red-500 ">0.999</h1>
              </div>
              <p className="text-2xl text-red-500 font-semibold">Positive</p>
            </div>
          </div>
        </article>

        <article className="mb-0 border-2 border-primary  h-auto flex flex-col items-start rounded-md my-8 bg-white ">
          <div className="flex items-center p-10 h-20 rounded-md bg-primary w-full">
            <h1 className="text-white text-xl">News</h1>
          </div>
          <div className="p-10">
            <h2 className="text-red-500">Positive</h2>
            <Link href="/">
              <p>
                TaxAct Reaches Multimillion-Dollar Settlement In Online Privacy
                Suit
              </p>
            </Link>
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
