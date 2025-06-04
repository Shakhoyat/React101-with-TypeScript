import { useContext } from "react";
import React, { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void; //Function inside interface
  updateUser: (id: string) => void; //Function inside interface
  deleteUser: (id: string) => void; //Function inside interface
}
const contextInitialValue: UserContextType = {
  user: null,
  setUser: () => {}, // Placeholder function
  updateUser: () => {}, // Placeholder function
  deleteUser: () => {}, // Placeholder function
};

const userContext = React.createContext<UserContextType>(contextInitialValue);
interface UserContextProviderProps {
  children: React.ReactNode;
}
export const UserContextProvider = (props: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      id: "1",
      name: "John Doe",
      email: "john@gmail.com",
      isLoggedIn: true,
    });
  }, []);

  const updateUser = (id: string) => {
    setUser((prevUser) =>
      prevUser && prevUser.id === id
        ? { ...prevUser, name: "Updated Name" }
        : prevUser
    );
  };

  const deleteUser = (id: string) => {
    setUser((prevUser) => (prevUser && prevUser.id === id ? null : prevUser));
  };

  return (
    <userContext.Provider value={{ user, setUser, updateUser, deleteUser }}>
      {props.children}
    </userContext.Provider>
  );
};
