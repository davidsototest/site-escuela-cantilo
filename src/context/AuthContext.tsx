import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastiSuccess } from "../components/toasti/ToastiSuccess";
import { ToastiError } from "../components/toasti/ToastiError";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem("token") || null);

  // Iniciar sesión
  const login = async (email: string, password: string) => {
    try {
      const response: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const idToken = await user.getIdToken(); // Obtener el token del usuario
      setToken(idToken);
      sessionStorage.setItem("token", idToken);
      ToastiSuccess("¡Su inicio de sesión ha sido EXITOSO! ✅");
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
      ToastiError("¡No se pudo iniciar la sesión, intenta nuevamente! 😊");
    }
  };

  // Cerrar sesión
  const logout = async () => {
    try {
      await signOut(auth); // Cerrar sesión en Firebase
      setToken(null);
      sessionStorage.removeItem("token");
      ToastiSuccess("¡Su cierre de sesión ha sido EXITOSO! ✅");
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
      ToastiError("¡No se pudo cerrar la sesión, intenta nuevamente! 😊");
    }
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
