import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import { RequireAuth } from ".";
import ForgotPaswdProcess from "../pages/auth/ForgotPaswdProcess";
import ProfileUser from "../pages/profileUser";
import ListUsers from "../pages/users";
import ListOrganizations from "../pages/organizations";
import CreateOrganization from "../pages/createOrganization";
import LoadingPage from "../pages/loading";
import CreateProvince from "../pages/createProvince";
import ListProvinces from "@/pages/provinces";
import CreateTerritory from "../pages/createTerritory";
import ListTerritories from "@/pages/territories";

function GlobalRoutes() {
  return (
    <div className="bg-white rounded-lg">
      <Routes>
        {/* PUBLIC ROUTES */}
        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPaswdProcess />} />
        {/*  PROTECTED ROUTES */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/profile/:id" element={<ProfileUser />} />
          <Route path="/organizations" element={<ListOrganizations />} />
          <Route
            path="/organizations/create"
            element={<CreateOrganization />}
          />
          {/* PYRAMIDE */}
          <Route
            path="/pyramid/provinces/create"
            element={<CreateProvince />}
          />
          <Route path="/pyramid/provinces" element={<ListProvinces />} />
          <Route path="/pyramid/territories" element={<ListTerritories />} />
          <Route
            path="/pyramid/territories/create"
            element={<CreateTerritory />}
          />

          {/* <Route
            path="/pyramid/provinces/:id"
            element={<CreateOrganization />}
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default GlobalRoutes;
