import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./account/LoginPage";
import PigeonMainPage from "./main/PigeonMainPage";
import RegisterPage from "./account/RegisterPage";

const App = () => {
  const shouldRedirect = false;
  return (
    <Routes>
        <Route
          path="/"
          element={
            shouldRedirect ? (
              <Navigate replace to="/login" />
            ) : (
              <PigeonMainPage />
            )
          }
        />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App;
