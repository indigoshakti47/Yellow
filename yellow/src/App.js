import React, {useState} from 'react';
import Profile from './components/Profile'

function App() {
  const [ nombre, cambiarNombre ] =useState ("")
  function inputEvent(e){
    cambiarNombre(e.target.value)
  }
  return (
    <div>
      <h1 style={{fontSize:"36px"}}>The dark side of the {nombre}</h1>
      <input name="nombre" type="text" value={nombre} onChange={inputEvent}/>
      <Profile/>

    </div>
  );
}

export default App;
