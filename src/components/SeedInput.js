import React, { useState } from "react";
import "animate.css";

const SeedInput = ({ seed, setSeed }) => {
  const [isWobbling, setIsWobbling] = useState(false);

  const generateRandomSeed = () => {
    // Generate a random seed
    setSeed(Math.random().toString(36).substr(2, 9));

    // Trigger wobble animation
    setIsWobbling(true);

    // Remove the wobble class after the animation finishes (duration = 1s)
    setTimeout(() => {
      setIsWobbling(false);
    }, 1000); // Adjust based on wobble animation duration (1s)
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2">Seed:</label>
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        className="border rounded px-4 py-2"
      />
      <button
        onClick={generateRandomSeed}
        className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded animate__animated animate__bounce ${
          isWobbling ? "animate__wobble" : ""
        }`}
      >
        Generate Random Seed
      </button>
    </div>
  );
};

export default SeedInput;

