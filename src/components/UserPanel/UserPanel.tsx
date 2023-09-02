import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Dropdown } from "react-bootstrap";
import "../../styles/UserPanel.css";
import { useUsers } from "../../context/UserContext";
import { UserModalTypes } from "../UserModal";

/**
 * TODO:
 * 1. Add sidebar
 * 2. Add Topbar
 * 3. Add current link handling
 * 4. Add navigate in user dropdown
 */

export const UserPanel = () => {
  const location = useLocation();
  console.log("Location", location);
  const { users, selectedUser, setSelectedUser } = useUsers();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const getRouteTitle = () => {
    if (location.pathname.includes("profile")) {
      return "Profile";
    } else if (location.pathname.includes("posts")) {
      return "Posts";
    } else if (location.pathname.includes("gallery")) {
      return "Gallery";
    } else {
      return "Todo";
    }
  };

  const onSelectUser = (user: UserModalTypes.User) => {
    console.log("User", user);
    setSelectedUser(user);
    navigate(`/user/${user.id}/profile`);
  };

  const onSignOut = () => {
    navigate("/");
  };

  return (
    <Container fluid className="parent-container">
      <div className="row h-100">
        <Nav className="col-md-2 flex-column align-items-left justify-content-center side-nav-bar h-100">
          <Nav.Item className="position-relative">
            <Nav.Link
              as={Link}
              to={`profile`}
              className={isActive("profile") ? "active" : ""}
            >
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="position-relative">
            <Nav.Link
              as={Link}
              to={`posts`}
              className={isActive("posts") ? "active" : ""}
            >
              Posts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="position-relative">
            <Nav.Link
              as={Link}
              to={`gallery`}
              className={isActive("gallery") ? "active" : ""}
            >
              Gallery
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="position-relative">
            <Nav.Link
              as={Link}
              to={`todo`}
              className={isActive("todo") ? "active" : ""}
            >
              Todo
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <main className="col-md-10 flex-grow-1 panel-child-container">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h6">{getRouteTitle()}</h1>
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                id="dropdown-basic"
                className="no-caret"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <img
                  src={selectedUser?.profilepicture}
                  alt={`${selectedUser?.name}'s profile`}
                  className="rounded-circle"
                  style={{
                    width: "30px",
                  }}
                />
                <span
                  style={{
                    paddingLeft: "12px",
                  }}
                >
                  {selectedUser?.name}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="dropdown-profile-container">
                  <img
                    src={selectedUser?.profilepicture}
                    alt={`${selectedUser?.name}'s profile`}
                    className="rounded-circle"
                    style={{
                      width: "60px",
                    }}
                  />
                  <h4 className="title h6">{selectedUser?.name}</h4>
                  <h6 className="email h6">{selectedUser?.email}</h6>
                </div>
                <div className="dropdown-inner-container">
                  {users.map((user, index) => {
                    return (
                      user.id !== selectedUser?.id && (
                        <Dropdown.Item key={index}>
                          <div
                            key={user.id}
                            onClick={() => onSelectUser(user)}
                            style={{
                              borderBottom: "2px solid #f8f8f8",
                            }}
                          >
                            <img
                              src={user.profilepicture}
                              alt={`${user.name}'s profile`}
                              className="rounded-circle"
                              style={{
                                width: "30px",
                              }}
                            />
                            <span
                              style={{
                                paddingLeft: "12px",
                                fontSize: "12px",
                              }}
                            >
                              {user.name}
                            </span>
                          </div>
                        </Dropdown.Item>
                      )
                    );
                  })}
                </div>
                <div className="dropdown-footer">
                  <button className="btn btn-danger" onClick={onSignOut}>
                    Sign Out
                  </button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Outlet />
        </main>
      </div>
    </Container>
  );
};
