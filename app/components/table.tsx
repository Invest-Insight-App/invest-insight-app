import React, { useEffect, useState } from 'react';
import { initialCompaniesData } from '../data';

interface TableProps {
  data: any;
  itemsPerPage?: number;
  totalPages: number,
  handleRowClick: (rowIndex: any, data: any) => void;
  selectedRow: any
  handlePageChange: any
  currentPage: any
}

interface CompanyData {
    category: null | string;
    cik: null | string;
    currency: null | string;
    cusip: null | string;
    exchange: null | string;
    fama_industry: null | string;
    fama_sector: null | string;
    id: null | string;
    industry: null | string;
    is_delisted: null | string;
    location: null | string;
    name: null | string;
    sector: null | string;
    sic: null | string;
    sic_industry: null | string;
    sic_sector: null | string;
    ticker: null | string;
}

const Table: React.FC<TableProps> = ({ data, itemsPerPage = 5, totalPages, handleRowClick, selectedRow, handlePageChange, currentPage }) => {
    const [tableData, setTableData] = useState(initialCompaniesData);
    const [columns, setColumns] = useState([""]);

  useEffect(() => {
    setTableData(data)
    setColumns(Object.keys(data[0]))
  }, [data]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th></th>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => handleRowClick(rowIndex, data)}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRow === rowIndex}
                  readOnly
                />
              </td>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {row[column as keyof CompanyData]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;