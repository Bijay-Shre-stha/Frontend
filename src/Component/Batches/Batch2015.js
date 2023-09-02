import React from "react";
import BatchContent from "../BatchContainer/BatchContent";

const Batch2015 = (props) => {
  const isDarkMode = props.mode === 'dark';

  return (
    <div>
      <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>B.Sc.CSIT Batch of 2015</h1>
      <BatchContent />
    </div>
  );
};

export default Batch2015;
