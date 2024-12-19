import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import { fetchAllUsers } from "../services/reqresApi";
import { CSVLink } from "react-csv";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const allUsers = await fetchAllUsers();
        setUsers(allUsers);
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
      setFilteredUser([user]); // Wrap the user in an array
      setError("");
    } else {
      setFilteredUser([]);
      setError("User not found");
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post("https://reqres.in/api/users", newUser);
      setUsers([...users, { ...newUser, id: response.data.id }]);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const editUser = async (updatedUser) => {
    try {
      await axios.put(`https://reqres.in/api/users/${updatedUser.id}`, updatedUser);
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const exportData = () => (filteredUser && filteredUser.length > 0 ? filteredUser : users);

  const headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email" },
    { label: "Avatar", key: "avatar" },
  ];

  const exportToJson = () => {
    const data = exportData();
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Manage Users</h1>
      <SearchBar onSearch={handleSearch} />
      <UserForm onSubmit={addUser} editingUser={editingUser} onEdit={editUser} />
      <div className="d-flex justify-content-end mb-3">
        <CSVLink
          data={exportData()}
          headers={headers}
          filename="users.csv"
          className="btn btn-primary me-2"
        >
          Export as CSV
        </CSVLink>
        <button className="btn btn-secondary" onClick={exportToJson}>
          Export as JSON
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="row mt-3">
        {(filteredUser && filteredUser.length > 0 ? filteredUser : users).map((user) => (
          <div className="col-md-4 mb-3" key={user.id}>
            <UserCard
              user={user}
              onDelete={deleteUser}
              onEdit={() => setEditingUser(user)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
