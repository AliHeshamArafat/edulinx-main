"use client";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromStorage() {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to restore authentication state:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUserFromStorage();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to your auth service
      // This is just a mock to demonstrate the flow

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const mockUser = {
        id: "user-123",
        name: "John Doe",
        email: email,
        avatar: "https://i.pravatar.cc/150?img=30",
      };

      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to your auth service

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful signup
      const mockUser = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        )}`,
      };

      setUser(mockUser);
      localStorage.setItem("user", JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error("Signup failed:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
