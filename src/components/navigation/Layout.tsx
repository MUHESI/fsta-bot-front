import { Sidebar } from "@/components/core";
import GlobalRoutes from "../../routes/routes";
import { useEffect } from "react";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { useRecoilState } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { IAutherUSer } from "@/types/stateSchema/auth";
import { IMetadataAuthUser } from "@/types/storageTypes";
import Navbar from "@/components/core/Navbar";
import VerifyBreakPoint from "./BreakPoint";

export default function Layout() {
  // RECOIL
  const [user, setUser] = useRecoilState(userAuthenticatedState);

  const checkAuthUser = () => {
    const dataSaved = LocalStorage.getItem<{
      data: IAutherUSer;
      metadata: IMetadataAuthUser | null;
    }>(keyStorage.AFIAGAP_AUTH_USER);
    if (dataSaved === null) {
      return;
    } else {
      const { data } = dataSaved;
      setUser({
        full_name: data.full_name,
        email: data.email,
        id: data.id,
        token: dataSaved.metadata?.token || "",
      });
    }
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  if (user.full_name === null) {
    return <GlobalRoutes />;
  }

  return (
    <>
      <div className="text-4xl bg-gray-100 bg-gray-100 min-h-screen">
        <div className="fixed z-50 bg-white w-full">
          <Navbar />
        </div>
        <div className="pt-[67px]">
          <Sidebar />
        </div>
        <VerifyBreakPoint className="px-2 pt-3">
          <GlobalRoutes />
        </VerifyBreakPoint>
      </div>
    </>
  );
}
