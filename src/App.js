import React, { useState, useEffect } from 'react';
import RegionSelector from './components/RegionSelector';
import ErrorSlider from './components/ErrorSlider';
import SeedInput from './components/SeedInput';
import DataTable from './components/DataTable';
import { generateData } from './utils'; // Import from utils

function App() {
  const [region, setRegion] = useState('USA');
  const [errorRate, setErrorRate] = useState(0);
  const [seed, setSeed] = useState(Math.random().toString(36).substr(2, 9));
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(20, region, errorRate, seed));
  }, [region, errorRate, seed]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Fake User Data Generator</h1>
      <div className="flex space-x-4 mb-6">
        <RegionSelector region={region} setRegion={setRegion} />
        <ErrorSlider errorRate={errorRate} setErrorRate={setErrorRate} />
        <SeedInput seed={seed} setSeed={setSeed} />
      </div>
      <DataTable data={data} setData={setData} region={region} errorRate={errorRate} seed={seed} />
    </div>
  );
}

export default App;
