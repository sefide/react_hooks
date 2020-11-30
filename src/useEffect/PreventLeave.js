import React, { useState } from "react";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
}

const PreventLeave = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div className="App">
            <button onClick = {enablePrevent}> protect </button>
            <button onClick = {disablePrevent}> unprotect </button>
        </div>
    )
}

export default PreventLeave;