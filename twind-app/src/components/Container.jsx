import * as React from 'react';

const Container = ({ children }) => (
  <div className="w-full md:w-11/12 max-w-5xl bg-white mt-8 p-8 shadow-lg">
    {children}
  </div>
);

export default Container;