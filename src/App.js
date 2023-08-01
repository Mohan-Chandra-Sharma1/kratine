import Navbar from "./Navbar"
import Navbar1 from "./Navbar1"
import Sidebar1 from "./Sidebar";
import './App.css';
import { MyApp } from "./Calender"
import Login from "./pages/Login"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Navbar1/>
     
     <Sidebar1/>
     <MyApp/>

     <BrowserRouter>
      <Routes>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Navbar/>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
