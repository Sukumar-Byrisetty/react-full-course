import React, { useState } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const ParentComp = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(7000);

    const incrementAge = () => {
        setAge(age + 1);
    };

    const incrementSalary = () => {
        setSalary(salary + 1000);
    };

    return(
        <>
          <Title />
          <Count text={"age"} number={age} />
          <Button clickHandler={incrementAge}>Increment Age</Button>
          <Count text={"salary"} number={salary} />
          <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </>
    );
};

export default ParentComp;