// import React, { useEffect, useState } from "react";
// const UseEffectEx = () => {
//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setcount(100);
//     }, 4000);
//     document.title = "MRU";
//   }, [count]);
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
     
//   );
// };
import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const[users , setUsers]=useState([]);
    useEffect ( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json().then(data=>{
            setUsers(data);
        }))
        .catch(err => console.log(err));
    }, [])
  return (
    <div>
        {
            users.map((user, index)=>{
                return (
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                        <h4>{user.username}</h4>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default UseEffectEx;