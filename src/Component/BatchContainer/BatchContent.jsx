import React from 'react'
import "./Batch.css";
import BatchBody from './BatchBody';

const BatchContent = () => {
    return (
        <div>
            <hr className="hr__styled" />
            <div className="body">
                <div className="row m-5">
                    <BatchBody/>
                    <BatchBody/>
                    <BatchBody/>
                </div>
            </div>
        </div>
    )
}

export default BatchContent
