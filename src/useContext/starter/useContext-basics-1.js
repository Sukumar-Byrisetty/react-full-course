import React, {useState} from "react";

const ParentComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "Sukumar",
    lastName: "Byrisetty",
    email: "Sukumar@gmail.com",
  });

  return (
    <div>
        <h1>useContext</h1>
        <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h2>Child Component</h2>
      <SubChildComponent />
    </div>
  );
};

const SubChildComponent = () => {
  return (
    <div>
      <h3>SubChild Component</h3>
    </div>
  );
};

export default ParentComponent;