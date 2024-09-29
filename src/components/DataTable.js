import React, { useState, useEffect, useRef } from "react";
import { generateData } from "../utils";
import { CSVLink } from "react-csv"; // Import CSVLink for exporting CSV
import 'animate.css';


const DataTable = ({ data, setData, region, errorRate, seed }) => {
  const [page, setPage] = useState(1);
  const tableEndRef = useRef(null);

  const loadMoreData = () => {
    const totalRecords = data.length;
    const newRecords = generateData(
      10,
      region,
      errorRate,
      seed + page,
      totalRecords
    );
    setData((prevData) => [...prevData, ...newRecords]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        tableEndRef.current &&
        tableEndRef.current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  // Prepare CSV data (Only for visible data)
  const csvData = data.map((record) => ({
    Index: record.index,
    Identifier: record.identifier,
    Name: record.name,
    Address: record.address,
    Phone: record.phone,
  }));

  return (
    <div>
      <div className="float-right mb-4">
        <CSVLink
          data={csvData}
          filename={`user_data_page_${page}.csv`}
          className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition transform hover:scale-110 animate-glow"
        >
          Export to CSV
        </CSVLink>
      </div>

      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Index</th>
            <th className="border px-4 py-2">Identifier</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.index}>
              <td className="border px-4 py-2">{record.index}</td>
              <td className="border px-4 py-2">{record.identifier}</td>
              <td className="border px-4 py-2">{record.name}</td>
              <td className="border px-4 py-2">{record.address}</td>
              <td className="border px-4 py-2">{record.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div ref={tableEndRef} />
    </div>
  );
};

export default DataTable;
