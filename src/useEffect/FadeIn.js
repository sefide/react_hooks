import React, { useState, useRef, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        const { current} = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
    }, []);
    
    if(typeof duration !== "number" || typeof duration !== "number" ) {
        return ;
    }

    return { ref: element, style: {opacity:0}};
}

const FadeIn = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const faseInP = useFadeIn(5, 10);

    return (
        <div className="App">
            <h1 {...fadeInH1}> Hello</h1>
            <p {...faseInP}> p tag.. blah blah</p>
        </div>
    )
}

export default FadeIn;