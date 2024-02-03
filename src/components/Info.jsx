import React from "react";

function Total({ message, count, unit }) {
  return (
    <div>
      <h3>{message + ": " + count + unit}</h3>
    </div>
  );
}

export default Total;
