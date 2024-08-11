import React from "react";

const Btn = ({ name }) => {
  return (
    <div className="dark:bg-slate-800 dark:border dark:border-spacing-1 px-3 py-2 text-sm bg-gray-200 rounded-md m-3">
      {name}
    </div>
  );
};

export default Btn;
