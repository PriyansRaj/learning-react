import React from "react";

const Card = ({ ConvertFrom, ConvertTo, onChange, value }) => { // 👈 
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
          {ConvertFrom} To {ConvertTo}
        </legend>
        <input
          type="date"
          id={ConvertFrom}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={onChange}
          value={value}
        />
      </fieldset>
    </div>
  );
};

export default Card;