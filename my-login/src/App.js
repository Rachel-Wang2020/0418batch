import NavBar from "./components/NarBar";
import LoginModal from "./components/LoginModal";
import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter, 
  Switch, 
  Route
  
} from "react-router-dom";
import Homepage from './components/Homepage'

function App() {
  const [modalOpen, setmodalOpen] = useState(false);
  const handleModalOpen = () => setmodalOpen(true);
  const handleModalClose = () => setmodalOpen(false);
  const [user,setLoginUser] = useState()


  return (
    
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <NavBar handleModalOpen={handleModalOpen} />
        <LoginModal modalOpen={modalOpen} handleModalClose={handleModalClose}/>
        </Route>
        <Route path="/homepage">
          <Homepage/>
        </Route>
      </Switch>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
