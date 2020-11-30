import React, { useEffect, useRef } from "react";

const useClick = ( onClick ) => {
    // if (typeof onClick !== "function") {
    //     return ;
    // }
    
    const element = useRef();
    useEffect(() => {
        // component mount 때 호출 
        // deps에 []가 없다면 update될 때마다 호출
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }

        // componentWillUnMount일 때 호출
        return () => {
            if(element.current) {
                element.current.removeElementListener("click", onClick);
            }
        };
    }, []) 
    return element;
}
const Click = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);

    return (
        <div className="App">
            <h1 ref={title}> Hi </h1>
        </div>
    )
}

export default Click;