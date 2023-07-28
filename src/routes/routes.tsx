import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import { RequireAuth } from ".";
import ForgotPaswdProcess from "../pages/auth/ForgotPaswdProcess";
import ProfileUser from "../pages/profileUser";
import ListUsers from "../pages/users/ListUsers";
import ListOrganizations from "../pages/organizations/ListOrganizations";

function GlobalRoutes() {
  return (
    <div className="bg-white rounded-lg">
      <Routes>
        {/* PUBLIC ROUTES */}
        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPaswdProcess />} />
        {/*  PROTECTED ROUTES */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/profile/:id" element={<ProfileUser />} />
          <Route path="/organizations" element={<ListOrganizations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default GlobalRoutes;
