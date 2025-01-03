import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return <div className="bg-gray-600 text-2xl text-white p-5">User: {userid}</div>;

}

export default User;
