import { useState } from 'react';

function useTable() {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [ page, setPage] = useState("1");
  const [ ticker, setTicker] = useState("TSLA");

  const calculateTotalNumberOfPages = (totalItems: number, itemsPerPage: number) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    setTotalPages(totalPages)
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };

  const handleRowClick = (index: number, data: any) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setTicker(data[index]['ticker'])
      setSelectedRow(index);
    }
  };

  return {
    totalPages,
    setTotalPages,
    calculateTotalNumberOfPages,
    paginate,
    currentPage,
    handleRowClick,
    selectedRow,
    setSelectedRow,
    setPage,
    page,
    ticker
  };
}

export default useTable;