import React from 'react'
import BatchBody from '../BatchContainer/BatchBody'
import BatchContent from '../BatchContainer/BatchContent';
const BCA2022 = (props) => {
  const isDarkMode = props.mode === 'dark';

  return (
    <div>
      <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>BCA Batch of 2022</h1>
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

export default BCA2022
