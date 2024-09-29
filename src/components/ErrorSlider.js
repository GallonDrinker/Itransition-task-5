import React from 'react';

const ErrorSlider = ({ errorRate, setErrorRate }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">Error Rate:</label>
      <input
        type="range"
        min="0"
        max="10"
        value={errorRate}
        onChange={(e) => setErrorRate(parseFloat(e.target.value))}
        className="mb-2"
      />
      <input
        type="number"
        min="0"
        max="1000"
        value={errorRate}
        onChange={(e) => setErrorRate(parseFloat(e.target.value))}
        className="border rounded px-4 py-2"
      />
    </div>
  );
};

export default ErrorSlider;
