"use client";

import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { SelectorComponent } from "../components/selector";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const marketOptions = ["NYSE", "NASDAQ", "NYSEMKT", "NYSEARCA", "OTC", "BATS", "INDEX"];

export const SelectList = () => {
  const [date, setDate] = useState("YYYY-MM-DD");
  const [dateObject, setDateObject] = useState(new Date());

  const [ exchange, setExchange] = useState("NYSE");
  const [ page, setPage] = useState("1");
  const [companiesData, setCompaniesData] = useState(null);

  const formatDate = (date: any) => {
    const dateObject = new Date(date);
    setDateObject(dateObject)

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);
    setDate(formattedDate)
  }

  useEffect(() => {
    const dateObject = new Date();
    formatDate(new Date(dateObject))

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/exchangeMarket/${exchange}/${page}`, {
          method: 'GET',
        });
        const data = await response.json();
        console.log("data", data)
        setCompaniesData(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [exchange, page]);


  return (
    <main>

    <form>
      <div className="bg-white my-8 p-6 mb-0">
            <div>
              <h2 className="process-text">Step 1</h2>
              <label htmlFor="market" className="boldtitle text-primary">
                {" "}
                What market are you interested in finding out about?
              </label>
              <SelectorComponent data={marketOptions} select={exchange} handleChange={setExchange} />
            </div>

            <div>
              <h2 className="process-text">Step 2</h2>
              <label htmlFor="timescale" className="boldtitle text-primary">
                {" "}
                What timescale are you interested in finding out about?
              </label>
              <DatePicker selected={dateObject} onChange={(date) => formatDate(date)} />
            </div>
      </div>
      </form>


    <div className="p-6 bg-white grid grid-cols-5">
      <Link href="/" className="col-start-1 col-end-3">
        <button className="btn-large p-0 m-0 col-start-1 col-end-2">
          {" "}
          Previous{" "}
        </button>
      </Link>

      <Link href={{ pathname: '/results', query: { date: date, exchange: exchange } }} className="col-start-4 col-end-6">
        <button className="btn-large p-0 m-0  "> Next </button>
      </Link>
    </div>

    </main>

  );
};

export default SelectList