import React from 'react';
import BatchBody from '../BatchContainer/BatchBody';
import BatchContent from '../BatchContainer/BatchContent';
const BCA2024 = (props) => {
  const isDarkMode = props.mode === 'dark';

  return (
    <div>
      <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>BCA Batch of 2024</h1>
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
    </div>
  )
}

export default BCA2024
