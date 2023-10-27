import React, { useEffect, useState } from "react";

const Final = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello im Coming from useEffect", count);
  }, []);

  return (
    <div>
       <h1>Learn useEffect Hello</h1>
       <h1>{count}</h1>
       <button onClick={() => {setCount(count + 1);}}>+</button>
    </div>
  );
};

export default Final;