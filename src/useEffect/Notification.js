import React from "react";

// ref : https://developer.mozilla.org/ko/docs/Web/API/notification

const useNotification = ( title, options ) => {
    if(!(Notification) in window) {
        return ;
    }
    const fireNotification = () => {
        if(window.Notification.permission !== "granted") {
            window.Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
            
        } else {
            new Notification(title, options);
        }
    };

    return fireNotification;
}

const Notification = () => {    
    const triggerNotification 
        = useNotification("Can I steal your meat ?", "I love meat.. don't you ? ");

    return (
        <div className="App">
            <button onClick={triggerNotification}>Notification</button>
        </div>
    );
}

export default Notification;