import React, { useState } from "react";

const contents = [
    {
        tab: "Section 1",
        content: "I'm the Content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the Content of the Section 2"
    }

]

const UseTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    
    if(!allTabs || !Array.isArray(allTabs)) {
        return ;
    }
    
    return {
        currentItem : allTabs[currentIndex], 
        changeItem: setCurrentIndex
    };
}

const Tabs = () => {
    const {currentItem, changeItem} = UseTabs(0, contents);

    return (
        <div className="App">
            <h2> {currentItem.content} </h2>

            {contents.map((content, index) => (
            <button onClick={() => changeItem(index)}>{content.tab}</button>
            )
            )}
            
        </div>
    )
}

export default Tabs;