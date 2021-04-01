import React, { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { UserTypes } from '../types';

interface UserContextProps {
  isLogged: boolean;
  username: string;
  userId: number;
  login: (email: string, password: string, loginType: UserTypes) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextProps);

interface UserProviderProps {
  children: ReactNode;
}

interface LoginCallback {
  status: number;
  data: any;
}

export function UserProvider({ children }: UserProviderProps) {
  const [id, setId] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  async function login(email: string, password: string, loginType: UserTypes) {
    const require = {
      email,
      "senha": password,
    };

    // const { status, data }: LoginCallback = await api.post(`/${loginType === 'sponsor' ? 'responsaveis' : 'doadores'}/login`, require);

    // if (status !== 200 && !data) {
    //   return false;
    // }

    // JSON.stringify(data);
    
    setId(/*data.id ||*/ 1);
    setUsername(/*data.nome ||*/ "Teste");
    setIsLogged(true);

    return true;
  }

  async function logout() {
    setId(0);
    setUsername('');
    setIsLogged(false);
  }

  return (
    <UserContext.Provider
      value={{
        isLogged,
        username,
        userId: id,
        login,
        logout,
      }}
    >
      { children }
    </UserContext.Provider>
  )
}