import React from "react";

const AuthContext = React.createContext(null);
export const useAuth = () => React.useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(() => {
    const raw = localStorage.getItem("twinsta:user");
    return raw ? JSON.parse(raw) : null;
  });

  function login(username) {
    const u = { username };
    setUser(u);
    localStorage.setItem("twinsta:user", JSON.stringify(u));
  }
  function logout() {
    setUser(null);
    localStorage.removeItem("twinsta:user");
  }

  const value = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
