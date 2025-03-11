import React from 'react';

const DataVisualization = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 30 },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Data Visualization for Business Insights</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">X</th>
            <th className="border px-4 py-2">Y</th>
          </tr>
        </thead>
        <tbody>
          {data.map((point, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{point.x}</td>
              <td className="border px-4 py-2">{point.y}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-gray-600">
        In a production scenario, you might render an interactive chart here using a library such as Chart.js or Recharts.
      </p>
    </div>
  );
};

export default DataVisualization;
