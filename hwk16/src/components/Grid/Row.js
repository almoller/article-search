import React from "react";

// const Row = ({ fluid, children }) => (
//   <div className={`row${fluid ? "-fluid" : ""}`}>
//     {children}
//   </div>
// );

// export default Row;

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
