import React from "react";

const Loader = () => {
  return (
    <div className="p-1">
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
