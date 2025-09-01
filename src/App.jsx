// import React from "react";
// import Table from "./components/Table";
// import Searchbar from "./components/Searchbar";



// function App() {


//   return (
//     <div>
     
//      {/* <Searchbar>  */}
//       <Table/>
//     </div>
//   );
// }

// export default App

// import React, { useState, useEffect } from "react";
// import { getposts, getRandomUser } from "./api";
// import "./App.css";
// import PostCard from "./components/PostCard";
// import UserCard from "./components/UserCard";

// function App() {
//   const [data, setData] = useState(null);
//   const [userData, setUserData] = useState(null);

//   // 1. Posts ke liye useEffect
//   useEffect(() => {
//     getposts().then((posts) => {
//       setData(posts);
//     });
//   }, []);

//   // 2. Random user ke liye alag useEffect
//   useEffect(() => {
//     getRandomUser().then((user) => setUserData(user.results[0]));
//   }, []);

// return (
//   <div>
//     {userData ? <UserCard data={userData} /> : <p>Loading user...</p>}
//     {data ? (
//       data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
//     ) : (
//       <p>No Data</p>
//     )}
//   </div>
// );

// }

// export default App;


































import React, { useState, useEffect } from "react";
import { getposts, getRandomUser } from "./api";
import "./App.css";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  // 1. Posts ke liye useEffect (sirf ek dafa load honge)
  useEffect(() => {
    getposts().then((posts) => {
      setData(posts);
    });
  }, []);

  // 2. Random user ke liye auto reload every 10 sec
  useEffect(() => {
    const fetchUser = () => {
      getRandomUser().then((user) => setUserData(user.results[0]));
    };

    fetchUser(); // pehli dafa call
    const interval = setInterval(fetchUser, 10000); // har 10 sec me call

    return () => clearInterval(interval); // cleanup jab component unmount hoga
  }, []);

  return (
    <div>
      {userData ? <UserCard data={userData} /> : <p>Loading user...</p>}
      {data ? (
        data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
