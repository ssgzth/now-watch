import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Add or remove the 'dark' class on the html element based on the dark mode state
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="p-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md dark:border dark:border-spacing-1 dark:shadow-md"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
