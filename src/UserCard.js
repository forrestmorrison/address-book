import React, { useState } from "react"

const UserCard = (props) => {
    return (
        <li style={{ listStyle: "none" }}>
            <h3>{props.name} <span>{props.location}</span></h3>
            <h4>{props.gender}</h4>
            <p>{props.}</p>
        </li>
    )


}

export default UserCard