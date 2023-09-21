import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import { RequireAuth } from ".";
import ForgotPaswdProcess from "../pages/auth/ForgotPaswdProcess";
import ProfileUser from "../pages/profileUser";
import ListUsers from "../pages/users";
import ScreenManagerOrg from "../pages/organizations";
import CreateOrganization from "../pages/createOrganization";
import LoadingPage from "../pages/loading";
import CreateProvince from "../pages/createProvince";
import ListProvinces from "@/pages/provinces";
import CreateTerritory from "../pages/createTerritory";
import ListTerritories from "@/pages/territories";
import ListHealthAreas from "../pages/healthAreas";
import CreateGap from "../pages/createGap";
import CreateScoreCard from "@/pages/createGap/formScore";
import CreateAlert from "../pages/createAlert";
import ListAlerts from "../pages/Alerts";
import ListRoles from "../pages/permissionRole";
import CreateVulnerabilty from "@/pages/createVulnerability";
import { GLOBAL_PERMISSIONS } from "@/types/permissions";
import ListPermissions from "@/pages/permission";

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
        <Route element={<RequireAuth alowedPermissions={"CREATE_GAP"} />}>
          <Route path="/" element={<Home />} />
          <Route path="/protected" element={<Home />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/profile/:id" element={<ProfileUser />} />
          <Route
            path="/organizations/:screenId"
            element={<ScreenManagerOrg />}
          />

          {/* PYRAMIDE */}
          {/* <Route
            path="/pyramid/provinces/create"
            element={<CreateProvince />}
          /> */}
          <Route path="/pyramid/provinces" element={<ListProvinces />} />
          <Route path="/pyramid/territories" element={<ListTerritories />} />
          <Route path="/pyramid/healthAreas" element={<ListHealthAreas />} />
          <Route
            path="/pyramid/territories/create"
            element={<CreateTerritory />}
          />

          {/* GAPS */}
          <Route path="/gaps/create/" element={<CreateGap />} />
          <Route
            path="/gaps/score-card/create/"
            element={<CreateScoreCard />}
          />

          {/* ALERTS */}
          <Route path="/alerts/create" element={<CreateAlert />} />
          <Route path="/alerts/" element={<ListAlerts />} />

          {/* VULNERABILTY */}
          <Route
            path="/vulnerabilities/create"
            element={<CreateVulnerabilty />}
          />
          <Route path="/alerts/" element={<ListAlerts />} />
          {/* <Route
            path="/pyramid/provinces/:id"
            element={<CreateOrganization />}
          /> */}
        </Route>
        <Route
          element={
            <RequireAuth
              alowedPermissions={GLOBAL_PERMISSIONS.CREATE_ORAGNIZATION}
            />
          }
        >
          <Route
            path="/organizations/create"
            element={<CreateOrganization />}
          />
        </Route>
        <Route
          element={
            <RequireAuth alowedPermissions={GLOBAL_PERMISSIONS.READ_ROLES} />
          }
        >
          <Route path="/permissions/roles" element={<ListRoles />} />
        </Route>

        <Route
          element={
            <RequireAuth
              alowedPermissions={GLOBAL_PERMISSIONS.READ_PERMISSIONS}
            />
          }
        >
          <Route path="/permissions" element={<ListPermissions />} />
        </Route>
      </Routes>
      {/*  */}
    </div>
  );
}

export default GlobalRoutes;
