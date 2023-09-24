"use client"

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ReactNode } from "react";

type User = {
  auth: boolean;
  id: string;
  username: string;
  email: string;
}

export const AuthContext = React.createContext({} as { user: User; login: (user: User) => void });
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState( {auth: false, id: "", username: "", email: ""} as User);

  const login = useCallback(  (user: User) => {
    setUser(user);
  }, []);

  const value = useMemo(() => ({ user, login }), [user, login]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}