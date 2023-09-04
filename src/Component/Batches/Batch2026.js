import React from "react";
import BatchBody from "../BatchContainer/BatchBody";
import BatchContent from "../BatchContainer/BatchContent";
const Batch2026 = (props) => {
  const isDarkMode = props.mode === 'dark';

  return (
    <div>
      <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>B.Sc.CSIT Batch of 2026</h1>
      <BatchContent />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />
      <BatchBody />    </div>
  );
};

export default Batch2026;
