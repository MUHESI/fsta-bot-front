import { useStateContext } from "../contexts/contextPorvider";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar } from "../components/core";
import GlobalRoutes from "../routes/routes";
import useAuth from "../components/hooks/useAuth";

export default function Layout() {
  const { activeMenu, setActiveMenu } = useStateContext();
  const { user } = useAuth();

  if (user.full_name === null) {
    return <GlobalRoutes />;
  }

  return (
    <>
      <div className="text-4xl bg-bgColor">
        <div className="flex relative dark:bg-main-dark-bg bg-white">
          {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "#2DAEC4", borderRadius: "50%" }}
              onClick={() => {
                setActiveMenu(!activeMenu);
              }}
            >
              <FiSettings />
            </button>
          </div> */}
          {/* <div className="w-72 fixed sidebar bg-white dark:bg-main-dark-bg"> */}
          {/* <div
            className="w-72 fixed sidebar    dark:bg-main-dark-bg"
            style={{
              border: "3px solid red",
              margin: "1px",
            }}
          > */}
          {/* dsfcsdcsduc dsc */}
          <Sidebar />
          {/* </div> */}

          {/* {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white dark:bg-main-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0  dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )} */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div
              // className="fixed w-[81%] bg-main-bg dark:bg-main-dark-bg navbar"

              className={`fixed bg-white dark:bg-main-dark-bg navbar 
              border-b
              }  `}
              style={{
                // width: `${activeMenu ? "80.9%" : "calc(100% - 85px)"}`,
                width: `${activeMenu ? "80.9%" : "calc(100% - 85px)"}`,
                marginRight: "100px",
                // marginLeft: `${activeMenu ? "0px" : "82px"}`,
                marginLeft: `${activeMenu ? "0px" : "82px"}`,
                background: "white",
              }}
            >
              <Navbar />
            </div>
            <div
              className="bg-red-100  w-full border"
              style={{
                height: `calc(100% - 70px)`,
                // width: `${activeMenu ? "100%" : "calc(100% - 85px)"}`,
                // border: "3px solid blue",
                marginTop: "70px",
                // marginLeft: "15px",
                marginRight: "6px",
                marginLeft: `${activeMenu ? "3px" : "82px"}`,

                // margin: "auto",
              }}
            >
              dysucj auvsdcwqauiv aoufi difvlsd dfsoigdng
              {/* <GlobalRoutes /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
