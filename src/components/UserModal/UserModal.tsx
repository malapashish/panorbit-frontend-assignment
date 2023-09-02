import React from "react";
import { UserModalTypes } from "./UserModalTypes";
import { Modal } from "react-bootstrap";

export const UserModal = ({
  users,
  onSelectUser,
}: UserModalTypes.UserModalProps) => {
  return (
    <Modal centered show scrollable>
      <Modal.Header>
        <Modal.Title>Select an account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="inner-container">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => onSelectUser(user)}
              className="profile-container"
            >
              <img
                src={user.profilepicture}
                alt={`${user.name}'s profile`}
                className="rounded-circle"
                style={{
                  width: "30px",
                }}
              />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};
