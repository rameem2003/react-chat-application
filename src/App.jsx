import { useContext, useState } from "react";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

// react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import context
import { AuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const ProtectorRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectorRoute>
                  <Home />
                </ProtectorRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
