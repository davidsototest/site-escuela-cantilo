import React from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import EmailsPage from "../pages/EmailsPage";

export interface RouteItem {
  name: string;
  path: string;
  element: React.ComponentType<any>;
}

export const getRoutes = (token: string | null): RouteItem[] =>
  [
    { name: "Home", path: "/", element: HomePage },
    { name: "Login", path: "/login", element: LoginPage },

    token
      ? { name: "Emails", path: "/emails", element: EmailsPage }
      : { name: "Home", path: "/", element: HomePage },

    { name: "todos", path: "*", element: HomePage },
  ].filter(Boolean) as RouteItem[];
