import React from "react";

const Button = ({children, clickHandler}) => {
    console.log(`${children} rendred`);
    return <button onClick={clickHandler}>{children}</button>
};

export default React.memo(Button);