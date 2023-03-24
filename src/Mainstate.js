import React, { useState } from 'react'
import Childstate from './Childstate';

const Mainstate = () => {
    
    const [name, setName] = useState("initial-value");
    const [age, setAge] = useState(25);

  return (
    <div>
        Main-state {name}{age}
        <button onClick={()=>setName("Updated-value")}>Update-button</button>
        <button onClick={()=>setAge(26)}>update-age</button>
        <Childstate value={name} function={setName} />
        </div>
  )
}

export default Mainstate