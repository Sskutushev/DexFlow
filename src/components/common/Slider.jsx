import React from 'react';

const Slider = ({ value, setValue, min = 1, max = 100, step = 1 }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex items-center space-x-3">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-glass rounded-lg appearance-none cursor-pointer slider-thumb"
      />
      <div className="bg-card text-text text-sm font-semibold px-3 py-1 rounded-md w-20 text-center">
        {value}x
      </div>
    </div>
  );
};

export default Slider;
