import React from 'react';

const Loader = () => {
    return (
        <div className={"d-flex justify-content-center d-flex align-items-center"} style={{height: "100vh"}}>
            <div className={"text-center"}>
                <div className="spinner-border" style={{width: "7rem", height: "7rem"}} role="status"></div>
                <h3 className={"mt-5"}>Heroku is taking a little bit of time...</h3>
            </div>
        </div>
    );
};

export default Loader;