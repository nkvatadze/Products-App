import React from "react";

const KeyValueDisplay = ({ name, value }) => {
  return (
    <div className="grid grid-cols-2 w-3/6 items-start justify-items-start gap-8 text-lg">
      <h3 className="col-span-1 font-bold">{name}:</h3>
      <p className="col-span-1">{value}</p>
    </div>
  );
};

export default KeyValueDisplay;
