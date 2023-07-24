import { useStateContext } from "../contexts/contextPorvider";
import { Navbar, Sidebar } from "../components/core";
import GlobalRoutes from "../routes/routes";
import useAuth from "../components/hooks/useAuth";
import { useEffect } from "react";
import LocalStorage, {
  keyStorage,
} from "../services/storage/localSTorageHandler";

export default function Layout() {
  const { activeMenu } = useStateContext();
  const { user, setUser } = useAuth();

  const checkAuthUser = () => {
    const dataSaved = LocalStorage.getItem(keyStorage.AFIAGAP_AUTH_USER);
    if (dataSaved === null) {
      return;
    } else {
      const { data, user, date } = dataSaved;

      setUser({ full_name: data.full_name, email: data.email });
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
      <div className="text-4xl bg-red-">
        <div className="flex relative dark:bg-main-dark-bg bg-white">
          <Sidebar />
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div
              className={`fixed bg-white dark:bg-main-dark-bg navbar 
              border-b
              }`}
              style={{
                width: `${activeMenu ? "80.9%" : "calc(100% - 85px)"}`,
                marginRight: "100px",
                marginLeft: `${activeMenu ? "0px" : "82px"}`,
                background: "white",
              }}
            >
              <Navbar />
            </div>
          </div>
          <div
            className={`p-5 bg-light-gray  w-full`}
            style={{
              marginTop: "68px",
              marginRight: "1px",
              marginLeft: `${activeMenu ? "0.1px" : "80px"}`,
            }}
          >
            <GlobalRoutes />
          </div>
        </div>
      </div>
    </>
  );
}
