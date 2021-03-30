import { createContext, ReactNode, useState } from "react";
import { UserTypes } from '../types';

interface UserContextProps {
  isLogged: boolean;
  userType: UserTypes;
  username: string;
  login: (email: string, password: string, loginType: UserTypes) => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState<UserTypes>("sponsor");

  async function login(email: string, password: string, loginType: UserTypes) {
    // Call to API, if callback is true
    setIsLogged(true);
  }

  function logout() {
    setIsLogged(false);
  }

  return (
    <UserContext.Provider
      value={{
        isLogged,
        userType,
        username,
        login,
      }}
    >
      { children }
    </UserContext.Provider>
  )
}