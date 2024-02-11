import React from 'react'
import { Navigate } from 'react-router-dom'; 

function PrivateRoute(props) {
    let islogin = true;
    if (!islogin) {
      return <Navigate to="/login" />;
    }
    return props.children;
  }

export default PrivateRoute