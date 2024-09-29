import React from 'react';

const RegionSelector = ({ region, setRegion }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">Select Region:</label>
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="border rounded px-4 py-2"
      >
        <option value="USA">USA</option>
        <option value="Poland">Poland</option>
        <option value="Georgia">Georgia</option>
      </select>
    </div>
  );
};

export default RegionSelector;
