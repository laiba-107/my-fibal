import React from "react";

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={user.avatar} className="card-img-top" alt={user.first_name} />
      <div className="card-body">
        <h5 className="card-title">
          {user.first_name} {user.last_name}
        </h5>
        <p className="card-text">{user.email}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-warning btn-sm" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
