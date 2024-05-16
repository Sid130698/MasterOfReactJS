import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Github() {
//   const [data, setData] = useState(null);
    const data = useLoaderData()
//   useEffect(() => {
//     fetch("https://api.github.com/users/sid130698")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok " + res.statusText);
//         }
//         return res.json();
//       })
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Failed to fetch data: " + err.message);
//       });
//   }, []);

  return (
    <div>
      <h1>Github User Info</h1>
      {data ? (
        <div>
          <p>Username: {data.login}</p>
          <p>Followers: {data.followers}</p>
          <p>Public Repositories: {data.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default Github;
 export const githbInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/sid130698")
    return response.json();
 }