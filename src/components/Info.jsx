import React from "react";

function Total({ message, count }) {
  return (
    <div>
      <h3>{message + ": " + count}</h3>
    </div>
  );
}

export default Total;
