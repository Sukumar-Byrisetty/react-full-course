import { useState } from 'react'

function useCounter(inititalValue = 0) {
    const [count, setCount] = useState(inititalValue);
    
    const increment = () => {
       setCount(count + 1);
    };

    const decrement = () => {
       setCount(count - 1);
    };

    const reset = () => {
       setCount(inititalValue);
    };

    return [count, increment, decrement, reset]
};

export default useCounter;
