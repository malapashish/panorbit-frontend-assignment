import React from "react";
import { UserModalTypes } from "./UserModalTypes";
import { Modal } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export const UserModal = ({
  users,
  onSelectUser,
  loading,
}: UserModalTypes.UserModalProps) => {
  const getTitle = () => {
    return (
      <Modal.Title>{loading ? <Skeleton /> : "Select an account"}</Modal.Title>
    );
  };

  return (
    <Modal centered show scrollable animation={false}>
      <Modal.Header>
        <Modal.Title>{getTitle()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="inner-container">
          {users &&
            users.map((user) => (
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
