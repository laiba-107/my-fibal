import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { fetchAllUsers } from "../services/reqresApi";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const allUsers = await fetchAllUsers();
        setUsers(allUsers); // Store all users
      } catch (err) {
        setError(err.message);
      }
    };

    getUsers();
  }, []);

  const handleSearch = (username) => {
    const user = users.find(
      (u) =>
        u.first_name.toLowerCase().includes(username.toLowerCase()) ||
        u.last_name.toLowerCase().includes(username.toLowerCase())
    );
    if (user) {
      setFilteredUser(user);
      setError("");
    } else {
      setFilteredUser(null);
      setError("User not found");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Search for a User</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-danger">{error}</p>}
      {filteredUser && <UserCard user={filteredUser} />}
    </div>
  );
};

export default Home;
