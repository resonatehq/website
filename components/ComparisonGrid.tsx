"use client";
import React from "react";

const ComparisonGrid = () => {
  const rows = [
    {
      title: "Async Await",
      columns: ["local", "no"],
    },
    {
      title: "Distributed Async Await",
      columns: ["global", "yes"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-6 text-center mb-8">
        <div></div> {/* Empty column for the row headers */}
        <div className="text-lg sm:text-xl font-semibold text-slate-700">
          Formalization of Concurrent Structure
        </div>
        <div className="text-lg sm:text-xl font-smibold text-slate-700">
          Formalization of Recovery
        </div>
      </div>

      {/* Table Rows */}
      <div className="grid grid-cols-3 gap-6">
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {/* Row Title */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-4 text-center font-semibold text-slate-700 text-md sm:text-lg">
              {row.title}
            </div>

            {/* Row Columns */}
            {row.columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex items-center justify-center bg-gray-50 rounded-lg p-4 text-center font-light text-slate-700 text-md sm:text-lg border border-gray-200"
              >
                {column}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ComparisonGrid;
