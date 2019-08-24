import React from 'react';
import './UserInput.css';
 const UserInput = ( props ) => {
     return(
         <div className="UserInput">
             <p>User Input:</p>
             <input type="text" style={props.style} onChange={props.changed} value={props.user} placeholder="Type username..."/>
         </div>
     )
 }
export default UserInput;