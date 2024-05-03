import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="demo">
      <div className="wrapper">
        <h1>
          A <span>demo</span> showing off <span>React</span> using{" "}
          <em>
            <span>Express</span> | <span>Webpack</span> | <span>SWC</span>
          </em>
        </h1>
        <h2>
          Some Async Data <small>No more extra babel plugins!</small>
        </h2>
        <ul>
          {users.length > 0 &&
            users.map((user, index) => <li key={index}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
