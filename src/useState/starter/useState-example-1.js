import React, { useState } from 'react'

const Index = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <button onClick={handleChange}>{showData ? "hide" : "show"}</button>
      {/* {showData && (
        <div className="content">
          this is react related exmples im practising 
          now.currently im in living im chennai.
        </div>
      )} */}
      {
        showData ? <div>dfghjjhvcfvxcvhbhbvhgcfxcfvghjkjhjhvcvcvmhg</div> : <h1>Data Is Hidden</h1>
      }
    </div>
  );
};

export default Index;
