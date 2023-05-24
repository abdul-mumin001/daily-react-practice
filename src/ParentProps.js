// import React from 'react'
// import ChildProps from './ChildProps'

// function ParentProps() {
//   const name="Mumin";
//   return <ChildProps name={name} />
  
// }

// export default ParentProps



import React, { useState } from 'react'

import ChildProps from './ChildProps'
function ParentProps() {
  const [color,setColor]=useState("default");
   const ChangeColor =(color)=> {
    setColor(color)
   }
  return (
    <>{"this is parent component color " + color}
    <ChildProps ChangeColor={ChangeColor} /></>
  )
}

export default ParentProps