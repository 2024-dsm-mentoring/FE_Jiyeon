import { Route, BrowserRouter, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { PostListInquiryPage } from "./pages/PostListInquiryPage";
import { NoticeModificationPage } from "./pages/NoticeModificationPage";
import { PostListWritePage } from "./pages/PostListWritePage";
import { CheckNoticeDetailsPage } from "./pages/CheckNoticeDetailsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="/PostListInquiry" element={<PostListInquiryPage />} />
        <Route
          path="/NoticeModification"
          element={<NoticeModificationPage />}
        />
        <Route path="/PostListWrite" element={<PostListWritePage />} />
        <Route
          path="/CheckNoticeDetails"
          element={<CheckNoticeDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
