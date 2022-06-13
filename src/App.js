import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
import Todos from "./component/Todos.js"


function App() {
  return (
    <div className="App">
      <NavbarComp/>
      {/* <Todos /> */}
    </div>
  );
}

export default App;
