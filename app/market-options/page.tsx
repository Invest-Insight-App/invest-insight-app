"use client";

// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SelectorComponent } from "../components/selector";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const marketOptions = ["NYSE", "NASDAQ", "NYSEMKT", "NYSEARCA", "OTC", "BATS", "INDEX"];

export const SelectList = () => {
  const [date, setDate] = useState(new Date());

  const [ exchange, setExchange] = useState("NYSE");
  const [ page, setPage] = useState("1");
  const [companiesData, setCompaniesData] = useState(null);

  useEffect(() => {
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
        <DatePicker selected={date} onChange={(date: any) => setDate(date)} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>

      <form>
        <SelectList
        />
      </form>



      <div className="p-6 bg-white grid grid-cols-5">
        <Link href="/" className="col-start-1 col-end-3">
          <button className="btn-large p-0 m-0 col-start-1 col-end-2">
            {" "}
            Previous{" "}
          </button>
        </Link>

        <Link href="/type-options" className="col-start-4 col-end-6">
          <button className="btn-large p-0 m-0  "> Next </button>
        </Link>
      </div>

    </main>
  );
}