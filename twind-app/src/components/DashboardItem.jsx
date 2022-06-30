import * as React from 'react';

const DashboardItem = ({ title, data }) => (
  <div className="w-1/4 m-4 p-[1.0111rem] border border-solid rounded shadow-md">
    <h2 className="mb-5">{title}</h2>
    <div className="text-3xl text-cyan-600">{data}</div>
  </div>
);

export default DashboardItem;
