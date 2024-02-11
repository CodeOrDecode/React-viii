import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Usercard from "./Usercard";
import "../App.css";
import { Navigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const islogin = true;

  async function getData() {
    setLoading(true);
    let res = await fetch(`https://reqres.in/api/users`);
    let finalRes = await res.json();
    console.log(finalRes);
    setData(finalRes.data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!islogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="stylediv">
      {data &&
        data.map((ele) => {
          return <Usercard key={ele.id} ele={ele} />;
        })}
    </div>
  );
};

export default User;
