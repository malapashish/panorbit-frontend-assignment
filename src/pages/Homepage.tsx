import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../apis";
import "../styles/Homepage.css";
import { UserModal, UserModalTypes } from "../components";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [userState, setUsersState] = useState();
  const [loading, setLoading] = useState(true);
  const { setSelectedUser, setUsers } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(API_ENDPOINTS.USER_ENDPOINT);
      const {
        data: { users },
      } = response;
      setUsersState(users);
      setLoading(false);
      setUsers(users);
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log("Error in fetching", error);
    }
  }, []);

  const onSelectUser = (user: UserModalTypes.User) => {
    console.log("User", user);
    setSelectedUser(user);
    navigate(`/user/${user.id}/profile`);
  };

  return (
    <div className="wavy-background">
      <UserModal
        loading={loading}
        users={userState}
        onSelectUser={onSelectUser}
      />
    </div>
  );
};
