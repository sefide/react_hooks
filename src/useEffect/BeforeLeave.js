import React, { useEffect } from "react";

const useBeforeLeave = ( onBefore ) => {
    const handle = (event) => {
        const { clientY } = event;
        if(clientY <= 0) {
            onBefore();
        }
    }

    useEffect(() => {
        if( onBefore && typeof onBefore === "function" ) {
            document.addEventListener("mouseleave", handle);
            return () => document.removeEventListener("mouseleave", handle);
        }
    }, []);
}

const BeforeLeave = () => {
    const begForLife = () => console.log("Please don't Leave");
    useBeforeLeave(begForLife);

    return (
        <div className="App">
            <h2>Hi</h2>
        </div>
    )
}

export default BeforeLeave;