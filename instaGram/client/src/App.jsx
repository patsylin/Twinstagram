// import Header from './components/header'
// import NavBar from './components/NavBar'
//import main from './components'
// import { appBarClasses } from '@mui/material';
// import './App.css'
import { useState, useEffect } from 'react';
import { fetchAllUser } from '../fetching';
import AllUsers from './components/allUsers';
import { Route, Routes } from 'react-router-dom';

function App() {
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
  // }, [])
  return (
    <>
    <Routes>
      <Route path='/users' element={<AllUsers/>}/>
    </Routes>

      {/* <NavBar />

      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/characters" element={Characters()} />
        <Route path="/posts" element={Posts()} />
      </Routes> */}
    </>
  );
}

export default App;


//route path ... if "path is true" then show element
