import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { useEffect, useState } from "react";
import { Login } from "@/pages";
import LoadingPage from "@/pages/loading";
import { HandlePermission } from "@/services/permissions";
import { PERMISSIONS } from "@/types/permissions";

export const user_test = {
  permissions: [
    "CREATE_GAP",
    "READ_GAP",
    "UPDATE_GAP",
    PERMISSIONS.CREATE_ORAGNIZATION,
    PERMISSIONS.READ_ROLES,
    PERMISSIONS.READ_PERMISSIONS,
  ],
};

export interface IRequireAuthProps {
  alowedPermissions: string | string[];
}

function RequireAuth({ alowedPermissions }: IRequireAuthProps) {
  const user = useRecoilValue(userAuthenticatedState);
  const [loadingInfo, setLoadingInfo] = useState(true);
  useEffect(() => {
    if (user) setLoadingInfo(false);
  }, [user]);

  // return user.full_name === null ? (
  return user.full_name !== null ? (
    <>
      {HandlePermission.check(alowedPermissions, user_test.permissions) ? (
        <Outlet />
      ) : (
        <> NOT ALLOWED</>
      )}
    </>
  ) : (
    <>
      {loadingInfo ? (
        <div className="h-screen flex justify-center items-center">
          <LoadingPage />
        </div>
      ) : (
        <Login />
      )}{" "}
    </>
  );
}

export default RequireAuth;
