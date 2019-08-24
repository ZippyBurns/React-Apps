import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h3>Base Syntax Assignment</h3>
            <p className="userName">{props.user1} : Never a dull moment
            </p>
            <p className="userName">  {props.user2} : Always so interesting
            </p>
        </div>
    )
}

export default UserOutput;