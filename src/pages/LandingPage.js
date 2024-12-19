import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToManageUsers = () => {
    navigate("/manage-users");
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the User Management App</h1>
      <p className="mt-3">
        This app allows you to add, edit, delete, search, and export user data.
      </p>
      <button className="btn btn-primary mt-4" onClick={goToManageUsers}>
        Go to Manage Users
      </button>
    </div>
  );
};

export default LandingPage;
