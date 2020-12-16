import React, { useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  //fetch Data here

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          <li>{`Username: ${user.name} User-Id: ${user.id}`}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
