import React from 'react'
import BatchContent from '../BatchContainer/BatchContent'

const BCA2023 = (props) => {
    const isDarkMode = props.mode === 'dark';

  return (
    <div>
       <h1 className={`heading text-center mt-5 text-${isDarkMode ? "light" : "dark"}`}>BCA Batch of 2023</h1>
      <BatchContent />
    </div>
  )
}

export default BCA2023
