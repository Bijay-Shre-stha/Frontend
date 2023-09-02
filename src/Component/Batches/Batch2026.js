import React from "react";
import BatchContent from "../BatchContainer/BatchContent";

const Batch2026 = (props) => {
  const isDarkMode = props.mode === 'dark';

  return (
    <div>
      <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>B.Sc.CSITBatch of 2026</h1>
      <BatchContent />
    </div>
  );
};

export default Batch2026;
