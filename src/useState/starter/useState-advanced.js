import React, { useState } from 'react';

const Index = () => {
    const initialArray = [
        {
            id:"sssss",
            firstName:"Sukumar",
            lastName:"Byrisetty",
            age: 23
        },
        {
            id:"xxxxx",
            firstName:"Prabhas",
            lastName:"Uppalapati",
            age: 44
        },

    ]
    const [data, setData] = useState(initialArray)
    console.log(data);

    const handleDelete = (comingId) => {
        const filterData = data.filter((eachItem) => {
            return eachItem.id  !== comingId;
        });
        setData(filterData);
    };

  return (
    <div>
        <ul>
            {
                data.map((eachItem, index) => {
                    const {firstName, lastName, age, id} = eachItem;
                    return (
                       <li key={index}>
                        <div>
                            firstName <strong>{firstName}</strong>
                        </div>
                        <div>
                            lastName <strong>{lastName}</strong>
                        </div>
                        <div>
                            age <strong>{age}</strong>
                        </div>
                        <button onClick={() =>handleDelete(id)}>Delete</button>
                       </li> 
                    );
                })}
        </ul>
    </div>
  );
};

export default Index;