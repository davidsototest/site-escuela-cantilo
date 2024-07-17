import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "toastify-js/src/toastify.css";
import { useMemo } from "react";
import { getRoutes } from "./routes/routes";
import { useAuth } from "./context/AuthContext";

function App() {
  const { token } = useAuth();

  // Usa useMemo para recalcular las rutas solo cuando token cambie
  const routes = useMemo(() => getRoutes(token), [token]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
