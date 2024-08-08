import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
