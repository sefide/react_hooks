import React, { useRef } from "react";

const useFullScreen = (callBack) => {
    const element = useRef();

    const checkFull = (isFull) => {
        if(callBack && typeof callBack === "function") {
            callBack(isFull);
        }
    }

    const triggerFullScreen = () => {
        if(element.current) {
            if(element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if(element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if(element.current.webkitRequestFullScreen) {
                element.current.webkitRequestFullScreen();
            } else if(element.current.msRequestFullScreen){
                element.current.msRequestFullScreen();
            }

            document.getElementById("img").style.width="1200px";
            checkFull(true);
        }
    }

    const exitFullScreen = () => {
        document.exitFullscreen();

        if(element.current.exitFullscreen) {
            element.current.exitFullscreen();
        } else if(element.current.mozCancelFullScreen) {
            element.current.mozCancelFullScreen();
        } else if(element.current.webkitExitFullScreen) {
            element.current.webkitExitFullScreen();
        } else if(element.current.msExitFullScreen){
            element.current.msExitFullScreen();
        }
        
        document.getElementById("img").style.width="300px";
        checkFull(false);
    }
    return {element, triggerFullScreen, exitFullScreen};
}

const FullScreen = () => {
    const onFullScreen = (isFull) => {
        console.log(isFull? "FULL" : "NOT FULL")
    }

    const {element, triggerFullScreen, exitFullScreen} = useFullScreen(onFullScreen);

    return (
        <div className="App" style={{height: "1000vh"}}>
            <div ref={element}>
                <img id="img"
                    src="https://cdn.pixabay.com/photo/2019/12/19/10/56/christmas-market-4705882_1280.jpg"
                    width="300px">
                </img>

                <button onClick={exitFullScreen}>EXIT Full Screen</button>
            </div>
            
            <button onClick={triggerFullScreen}>MAKE Full Screen</button>
        </div>
    );
}

export default FullScreen;