import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../apis";
import "../styles/Homepage.css";
import { UserModal, UserModalTypes } from "../components";

/**
 * TODO:
 * 1. Add a simple modal component and api call.
 * 2. Style the modal.
 * 3. Add the react loader skeleton.
 */

export const HomePage = () => {
  const [user, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(API_ENDPOINTS.USER_ENDPOINT);
      const {
        data: { users },
      } = response;
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
  };

  return (
    <div className="wavy-background">
      {user ? <UserModal users={user} onSelectUser={onSelectUser} /> : <></>}
    </div>
  );
};
