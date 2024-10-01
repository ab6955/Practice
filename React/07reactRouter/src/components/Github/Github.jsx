import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div
      className="bg-gray-700 text-center m-4 p-4 text-white
     text-3xl"
    >
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git_picute" width={300} />
    </div>
  );
}

export default Github;

export const githubInLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
