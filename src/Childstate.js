import React, { useState } from 'react'

const Childstate = (props) => {
    console.log("props", props)
    const [value1, setValue] = useState(props.value)
  return (
    <div>
        Childstate {value1}
        <button onClick={()=>setValue("Hooks-concept")}>Child-btn</button>
        </div>
  )
}

export default Childstate