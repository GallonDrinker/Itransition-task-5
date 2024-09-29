import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ data }) => {
  return (
    <div className="mt-6">
      <CSVLink
        data={data.map((row) => ({
          Index: row.index,
          Identifier: row.identifier,
          Name: row.name,
          Address: row.address,
          Phone: row.phone,
        }))}
        filename="fake-user-data.csv"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Export to CSV
      </CSVLink>
    </div>
  );
};

export default ExportButton;
