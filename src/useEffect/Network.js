import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
    const [status, setStatue] = useState(navigator.onLine);
    const handleChange = () => {
        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatue(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, []);
    return status;
}

const Network = () => {
    const handleNetworkChange = (online) => {
        console.log(online? "We just went to onLine" : "We are offLine");
    }
    const online = useNetwork(handleNetworkChange);

    return (
        <div className="App">
            <h1>{online? "onLine" : "offLine" }</h1>
        </div>
    )
}

export default Network;