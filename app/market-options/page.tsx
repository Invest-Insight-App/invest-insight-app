"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SelectorComponent } from "../components/selector";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "../components/table";
import useTable from "../hooks/useTable";
import useDate from "../hooks/useDate";
import useFetchTasks from "../hooks/useFetch";

const marketOptions = ["NYSE", "NASDAQ", "NYSEMKT", "NYSEARCA", "OTC", "BATS", "INDEX"];

export const SelectList = () => {

  const { totalPages, calculateTotalNumberOfPages, handleRowClick, selectedRow, page, ticker, paginate, currentPage } = useTable();
  const { formatDate, dateObject, date} = useDate();
  const { fetchData, companiesData, totalCount} = useFetchTasks();
  const [ exchange, setExchange] = useState("NYSE");

  useEffect(() => {
    const dateObject = new Date();
    formatDate(new Date(dateObject))

    fetchData(exchange, page)
    calculateTotalNumberOfPages(totalCount , 10)
  }, [exchange, page, totalCount]);

  const handlePageChange = (currentPage: any) => {
    paginate(currentPage)
    fetchData(exchange, currentPage)
  }

  return (
    <main>

    <div>
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

            <div>
              <Table data={companiesData} itemsPerPage={10} totalPages={totalPages} handleRowClick={handleRowClick} selectedRow={selectedRow} handlePageChange={handlePageChange} currentPage={currentPage} />
            </div>
      </div>

      </div>


    <div className="p-6 bg-white grid grid-cols-5">
      <Link href="/" className="col-start-1 col-end-3">
        <button className="btn-large p-0 m-0 col-start-1 col-end-2">
          {" "}
          Previous{" "}
        </button>
      </Link>

      <Link href={{ pathname: '/results', query: { date: date, ticker: ticker } }} className="col-start-4 col-end-6">
        <button className="btn-large p-0 m-0  "> Next </button>
      </Link>
    </div>

    </main>

  );
};

export default SelectList