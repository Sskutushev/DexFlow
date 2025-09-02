import React from 'react';

// Кастомный компонент Switch (toggle)
const Switch = ({ enabled, setEnabled }) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`${enabled ? 'bg-success' : 'bg-gray-500'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
    >
      <span
        className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  );
};

export default Switch;
