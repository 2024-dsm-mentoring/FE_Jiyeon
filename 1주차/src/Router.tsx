import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { PostListInquiryPage } from "./pages/PostListInquiryPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="/PostListInquiry" element={<PostListInquiryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
