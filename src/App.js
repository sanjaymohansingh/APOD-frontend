import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
import Dashboard from "./components/Dashboard";
import Auth from "./Authentication/Auth";
import Image from "./components/Image";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/Dashboard" element={<Auth><Dashboard/></Auth>}/>
      <Route path="/image" element={<Auth><Image/></Auth>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
