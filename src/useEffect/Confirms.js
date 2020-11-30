import React from "react";

const useConfirm = ( message = "", onConfirm, onCancel ) => {
    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }

    if(!onCancel || typeof onCancel !== "function") {
        return;
    }

    const confirmAction = () => {
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}

const Confirms = () => {
    const deleteWorld = () => console.log("delete the world !");
    const abort = () => console.log("save the world !");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

    return (
        <div className="App">
            <button onClick={ confirmDelete }> Delete the world</button>
        </div>
    )
}

export default Confirms;