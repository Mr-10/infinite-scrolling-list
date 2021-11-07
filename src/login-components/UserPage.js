import React from "react";

const UserPage = ({ auth }) => (
  <div>
    <h1>Dashboard</h1>
    <div>Hello {auth.username}. This is your dashboard.</div>
  </div>
);

export default UserPage;
