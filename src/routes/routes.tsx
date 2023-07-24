import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import { RequireAuth } from ".";
import ForgotPaswdProcess from "../pages/auth/ForgotPaswdProcess";
import ProfileUser from "../pages/profileUser";

function GlobalRoutes() {
  return (
    <div className="bg-slate-50">
      <Routes>
        {/* PUBLIC ROUTES */}
        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPaswdProcess />} />
        {/*  PROTECTED ROUTES */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Home />} />
          <Route path="/users/profile/:id" element={<ProfileUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default GlobalRoutes;
