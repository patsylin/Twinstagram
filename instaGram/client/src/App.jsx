// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import SingleUser from "./pages/SingleUser.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* users */}
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:user_id" element={<SingleUser />} />

          {/* posts */}
          <Route path="/posts/:id" element={<SinglePost />} />

          {/* catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
// import Header from './components/header'
// import NavBar from './components/NavBar'
//import main from './components'
// import { appBarClasses } from '@mui/material';
// import './App.css'
// import { useState, useEffect } from 'react';
// import { fetchAllUser } from '../fetching';
// import AllUsers from './components/allUsers';
// import { Route, Routes } from 'react-router-dom';
// import SingleUser from './components/SingleUser';

//render UserProfile
//make a UserProfile route in here

// function App() {
//useState (to hold data)
// const [allUser, setAllUser] = useState([]);

// //useEffect
// useEffect(() => {
//   async function fetchData(){
//     const user = await fetchAllUser();
//     setAllUser(user);
//   //  console.log(user);
//     return user;
//   }
//   fetchData();
// // }, [])
// return (
//   <>
//   {
//   <NavBar />

//   <Routes>
//     <Route path='/users' element={<AllUsers/>}/>
//     <Route path='/users/:user_id' element={<SingleUser/>}/>
//   </Routes>
//   </>
// }
{
  /* <NavBar />

      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/characters" element={Characters()} />
        <Route path="/posts" element={Posts()} />
      </Routes> */
}
//     </>
//   );
// }

// export default App;

//route path ... if "path is true" then show element
