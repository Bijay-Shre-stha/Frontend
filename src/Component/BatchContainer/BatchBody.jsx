import React, { useRef } from 'react';

const BatchBody = () => {
    const refBipin = useRef();
    const refKeshab = useRef();
    const refRaul = useRef();

    const handleBipin = () => {
        refBipin.current.click();
    };

    const handleKeshab = () => {
        refKeshab.current.click();
    };

    const handleRaul = () => {
        refRaul.current.click();
    };
    const refClose = React.useRef();


    return (
        <div>
            <button ref={refBipin} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#bipinModal">
                Launch Bipin's modal
            </button>
            <div className="modal fade" id="bipinModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content `}>
                        <div className="modal-header">
                            <b><h5 className="modal-title text-center" id="staticBackdropLabel">Bipin Bartaula</h5></b>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <h3>High School</h3>
                                    <section className=''>XYZ Academy</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Hometown</h3>
                                    <section>Nepal</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Goals</h3>
                                    To Be A Truly Happy Person
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Interests</h3>
                                    Playing PC Games
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <button ref={refKeshab} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#keshabModal">
                Launch Keshab's modal
            </button>
            <div className="modal fade" id="keshabModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content `}>
                        <div className="modal-header">
                            <b><h5 className="modal-title text-center" id="staticBackdropLabel">Keshab Rachit Regmi</h5></b>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <h3>High School</h3>
                                    <section className=''>XYZ school</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Hometown</h3>
                                    <section>Nepal</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Goals</h3>
                                    Software Engineer
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Interests</h3>
                                    Gaming and computers
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <button ref={refRaul} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#raulModal">
                Launch Raul's modal
            </button>
            <div className="modal fade" id="raulModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content `}>
                        <div className="modal-header">
                            <b><h5 className="modal-title text-center" id="staticBackdropLabel">Raul Shah</h5></b>
                            <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <h3>High School</h3>
                                    <section className=''>XYZ Int'l College</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Hometown</h3>
                                    <section>Nepal</section>
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Goals</h3>
                                    Earn and Travel
                                    <hr />
                                </div>
                                <div className="mb-3">
                                    <h3>Interests</h3>
                                    Trying new things
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="body">
                <div className="row m-5">

                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src="https://doko.dwit.edu.np/images/studentProfile/GsnA8d5wOZRAi1W4qF6LVOVXIwC4FO2PpuFiODby.jpg"
                                className="card-img-top"
                                alt="..."
                                onClick={handleBipin}
                            />
                            <div className="card-body bg-success">
                                <h5 className="card__name card-title text-white bg-success text-center" onClick={handleBipin}>
                                    Bipin Bartaula
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src="https://doko.dwit.edu.np/images/studentProfile/Zy3ynRuYALi67e4RnSz4YiyKV4SM35tjJHk6ZyuJ.jpg"
                                className="card-img-top"
                                alt="..."
                                onClick={handleKeshab}
                            />
                            <div className="card-body bg-success">
                                <h5 className="card__name card-title text-white bg-success text-center" onClick={handleKeshab}>
                                    Keshab Rachit Regmi
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src="https://doko.dwit.edu.np/images/studentProfile/EM0ern1yPJGvVCJTl1NW2yL4wHosEDij4iMaJkLn.jpg"
                                className="card-img-top"
                                alt="..."
                                onClick={handleRaul}
                            />
                            <div className="card-body bg-success">
                                <h5 className="card__name card-title text-white bg-success text-center" onClick={handleRaul}>
                                    Raul Shah
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BatchBody
