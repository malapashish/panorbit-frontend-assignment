import React, { createContext, useContext, useState, useMemo } from "react";
import { UserModalTypes } from "../components";

interface UserContextProps {
  users: UserModalTypes.User[];
  setUsers: React.Dispatch<React.SetStateAction<UserModalTypes.User[]>>;
  selectedUser: UserModalTypes.User | null;
  setSelectedUser: React.Dispatch<
    React.SetStateAction<UserModalTypes.User | null>
  >;
}

const UserContext = createContext<any>(undefined);

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  console.log(children);
  const [users, setUsers] = useState<UserModalTypes.User[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserModalTypes.User | null>(
    null
  );

  const values = useMemo(
    () => ({
      users,
      setUsers,
      selectedUser,
      setSelectedUser,
    }),
    [users, selectedUser]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUsers = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
