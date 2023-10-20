import React, { useState } from 'react'

const Index = () => {

    const [firstName, setFirstName] =  useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const changeFirstName = (e) => {
    //     setFirstName(e.target.value);
    // };

    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // };

    // const changePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleInputChange = (e, name) => {
    //     console.log(e.target.value, name);
    //     if (name === "firstName") {
    //         setFirstName(e.target.value);
    //     } else if (name === "email") {
    //         setEmail(e.target.value);
    //     } else if (name === "password") {
    //         setPassword(e.target.value);
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            firstname: firstName,
            email: email,
            password: password,
        };
        console.log(userObj);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-container">
            <input 
              type="text" 
              name="firstname" 
              id="firstname" 
              value={firstName}
              placeholder="Enter Your Name" 
            //   onChange={(e) => handleInputChange(e, "firstName")}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="form-container">
            <input 
              type="email" 
              name="email" 
              id="email"
              value={email} 
              placeholder="Enter Your Email"
            //   onChange={(e) => handleInputChange(e, "email")} 
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={password}
              placeholder="Enter Your Password" 
            //   onChange={(e) => handleInputChange(e, "password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className="form-button">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
};

export default Index;