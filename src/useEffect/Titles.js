import React, { useState, useEffect } from "react";

const useTitle = ( initialTitle ) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);

    return setTitle;
}

const Titles = () => {
    const titleUpdator = useTitle("Loading...");
    
    setTimeout(() => titleUpdator("Updated ! "), 6000);
    return (
        <div className="Titles">
            <div>Hi</div>
        </div>
    );
}

export default Titles;