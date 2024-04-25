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

  const { totalPages, calculateTotalNumberOfPages, handleRowClick, selectedRow, page, ticker, paginate, currentPage, setCurrentPage } = useTable();
  const { formatDate, dateObject, date} = useDate();
  const [ exchange, setExchange] = useState("NYSE");
  const { fetchData, responseData} = useFetchTasks();

  useEffect(() => {
    const dateObject = new Date();
    formatDate(new Date(dateObject))
    const page = 1
    setCurrentPage(page)
    fetchData(`/api/exchangeMarket/${exchange}/${page}`)

    calculateTotalNumberOfPages(responseData.total_count , 10)

}, [exchange, page, responseData.total_count]);


  const handlePageChange = (currentPage: any) => {
    paginate(currentPage)
    // fetchData(exchange, currentPage)
    fetchData(`/api/exchangeMarket/${exchange}/${currentPage}`)
  }

  return (

    <main className="bg-gray-100 min-h-screen">
  <div className="container mx-auto py-8">
    <div className="bg-white shadow-md rounded-md p-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Step 1</h2>
        <label htmlFor="market" className="block text-primary font-bold mb-2">
          What market are you interested in finding out about?
        </label>
        <SelectorComponent data={marketOptions} select={exchange} handleChange={setExchange} />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Step 2</h2>
        <label htmlFor="timescale" className="block text-primary font-bold mb-2">
          What timescale are you interested in finding out about?
        </label>
        <DatePicker selected={dateObject} onChange={(date) => formatDate(date)} />
      </div>

      <div>
        <Table data={responseData.companies} itemsPerPage={10} totalPages={totalPages} handleRowClick={handleRowClick} selectedRow={selectedRow} handlePageChange={handlePageChange} currentPage={currentPage} />
      </div>
    </div>

    <div className="grid grid-cols-5 mt-8">
      <Link href="/" className="col-span-2">
        <button className="btn-large p-0">Previous</button>
      </Link>
      <div className="col-span-1"></div>
      <Link href={{ pathname: '/results', query: { date: date, symbol: ticker } }} className="col-span-2">
        <button className="btn-large p-0">Next</button>
      </Link>
    </div>
  </div>
</main>

  );
};

export default SelectList