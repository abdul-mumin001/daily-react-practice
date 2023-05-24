// import React from 'react'
// // import ParentProps from './ParentProps';

// function ChildProps(props) {
    
//   return (
//     <div>hi {props.name}</div>
//   )
// }

// export default ChildProps




import React from 'react'

function ChildProps({ChangeColor}) {
  return (
    <>
    <button onClick={()=>ChangeColor("yellow")}> Tranfer Btn</button>
    </>
  )
}

export default ChildProps