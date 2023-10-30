import React, { useState, useEffect, useRef } from "react";

const Starter = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
    <input 
      type="text" 
      name="firstName" 
      id="firstName" 
      onChange={(e) => {
        setFirstName(e.target.value);
      }} 
    />
    <h5>Typing: {firstName}</h5>
    <h5>Component rendered {renderCount.current} times</h5>
    </>
  );
};

export default Starter;