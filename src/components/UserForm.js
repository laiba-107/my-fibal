import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, editingUser, onEdit }) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ first_name: "", last_name: "", email: "", avatar: "" });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onEdit(user);
    } else {
      onSubmit(user);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col">
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="avatar"
            value={user.avatar}
            onChange={handleChange}
            className="form-control"
            placeholder="Avatar URL"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
