import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const Singleuser = () => {
  const { userid } = useParams();
  const [datasingle, setDatasingle] = useState(null);
  const [loading, setLoading] = useState(false)
  async function getData() {
    setLoading(true);
    let res = await fetch(`https://reqres.in/api/users/${userid}`);
    let finalRes = await res.json();
    setDatasingle(finalRes.data);
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <div>
      {datasingle && <div>
        <img src={datasingle.avatar} alt="" />
        <h3>Name is : {datasingle.first_name} {datasingle.last_name}</h3>
        <h4>Email is : {datasingle.email}</h4>

      </div>}
      <Link to="/user">Go back to main menu</Link>
    </div>
  );
};

export default Singleuser;
