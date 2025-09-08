import React from "react";
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";

const NepaliCal = ({ onChange }) => {
  const handleCalendarChange = (e) => {
    // 1. Correctly deconstruct the event object from the Calendar component
    // The 'e' object here is { year: ..., month: ..., day: ... }
    const { year, month, day } = e;
    
    // 2. Format the date into a standard string format (e.g., "YYYY-MM-DD")
    // Use padStart to ensure single-digit months/days are zero-padded
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // 3. Create a fake event object to pass to the parent's onChange handler
    // This allows the parent component to use e.target.value as it expects.
    const fakeEvent = {
        target: {
            value: formattedDate
        }
    };
    
    // 4. Call the parent's onChange prop with the new fake event object
    onChange(fakeEvent);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
          BS To AD
        </legend>
        <Calendar 
          id="bsDate" 
          className="w-full" 
          onChange={handleCalendarChange}
        />
        <p className="mt-3 text-sm text-gray-600"></p>
      </fieldset>
    </div>
  );
};

export default NepaliCal;