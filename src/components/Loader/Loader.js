import React from 'react';

const Loader = () => {
    const messages = [
        'I\'m using the free plan',
        'It\'s taking a bit of time loading the API',
        'It\'ll be done soon, thanks for visiting!'
    ];

    let index = 0;
    const $loaderMsg = document.getElementById('loaderMsg');

    if ($loaderMsg) {
        const timerMsg = setInterval(() => {
            $loaderMsg.innerHTML = messages[index++];

            if (index === messages.length) {
                clearInterval(timerMsg);
            }
        }, 4000);
    }

    return (
        <div className={"d-flex justify-content-center d-flex align-items-center"} style={{height: "100vh"}}>
            <div className={"text-center"}>
                <div className="spinner-border" style={{width: "7rem", height: "7rem"}} role="status"></div>
                <h3 className={"mt-5"} id={"loaderMsg"}>The site make take a bit of time...</h3>
            </div>
        </div>
    );
};

export default Loader;