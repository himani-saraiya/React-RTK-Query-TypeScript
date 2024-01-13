import React from 'react';

export type DynamicTableProps = {
  data: Record<string, any>[];
};

const ATMTable: React.FC<DynamicTableProps> = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table className='border-separate md:table-fixed border-0 border-spacing-0  '>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th  className='border-3 border-black-400 pl-8 h-12 p-3' key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td className='border-1 border-blue-800 h-10 p-3' key={colIndex}>{rowData[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ATMTable;
