import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/Login";
import { RequireAuth } from ".";
import ForgotPaswdProcess from "../pages/auth/ForgotPaswdProcess";
import ProfileUser from "../pages/profileUser";
import ListUsers from "../pages/users";
import ScreenManagerOrg from "../pages/organizations";
import CreateOrganization from "../pages/createOrganization";
import LoadingPage from "../pages/loading";
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
import { GLOBAL_PERMISSIONS as PERMI } from "@/types/permissions";
import ListPermissions from "@/pages/permission";
import ListGaps from "@/pages/gaps";
import ListCrises from "@/pages/crises";
import ListMedicaments from "@/pages/medicaments";
import ListTypePersonnels from "@/pages/typePersonnel";
import ListMaladies from "@/pages/maladies";
import Pyramid from "@/pages/pyramid/";

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
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/protected" element={<Home />} /> */}
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
          <Route path="/pyramid/" element={<Pyramid />} />
          <Route path="/pyramid/provinces" element={<ListProvinces />} />
          {/* <Route path="/pyramid/territories" element={<ListTerritories />} /> */}
          {/* <Route path="/pyramid/healthAreas" element={<ListHealthAreas />} /> */}
          {/* <Route path="/pyramid/structure" element={<ListHealthAreas />} /> */}
          <Route
            path="/pyramid/territories/create"
            element={<CreateTerritory />}
          />

          {/* GAPS */}

          <Route
            element={<RequireAuth alowedPermissions={PERMI.READ_ALL_GAPS} />}
          >
            <Route path="/gaps/" element={<ListGaps />} />
          </Route>
          <Route element={<RequireAuth alowedPermissions={PERMI.CREATE_GAP} />}>
            <Route path="/gaps/create/" element={<CreateGap />} />
          </Route>
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
            <RequireAuth alowedPermissions={PERMI.CREATE_ORAGNIZATION} />
          }
        >
          <Route
            path="/organizations/create"
            element={<CreateOrganization />}
          />
        </Route>
        <Route element={<RequireAuth alowedPermissions={PERMI.READ_ROLES} />}>
          <Route path="/permissions/roles" element={<ListRoles />} />
        </Route>

        <Route
          element={<RequireAuth alowedPermissions={PERMI.READ_PERMISSIONS} />}
        >
          <Route path="/permissions" element={<ListPermissions />} />
        </Route>
        <Route
          element={<RequireAuth alowedPermissions={PERMI.READ_MALADIES} />}
        >
          <Route path="/maladies" element={<ListMaladies />} />
        </Route>
        <Route element={<RequireAuth alowedPermissions={PERMI.READ_CRISES} />}>
          <Route path="/crises" element={<ListCrises />} />
        </Route>
        <Route
          element={<RequireAuth alowedPermissions={PERMI.READ_MEDICAMENTS} />}
        >
          <Route path="/medicaments" element={<ListMedicaments />} />
        </Route>
        <Route
          element={
            <RequireAuth alowedPermissions={PERMI.READ_TYPE_PERSONNELS} />
          }
        >
          <Route path="/typePersonnels" element={<ListTypePersonnels />} />
        </Route>
      </Routes>
      {/*  */}
    </div>
  );
}

export default GlobalRoutes;
