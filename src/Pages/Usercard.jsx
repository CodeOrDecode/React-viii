import React from 'react'
import { Link } from "react-router-dom";


const Usercard = ({ele}) => {
  return (
    <div>

        <img src={ele.avatar} alt="" />
        <h3>Name is : {ele.first_name} {ele.last_name}</h3>
        <h4>Email is : {ele.email}</h4>
        <Link to={`/user/${ele.id}`}>More details click here</Link>
    </div>
  )
}

export default Usercard