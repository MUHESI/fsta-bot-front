import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdChevronRight, MdOutlineCancel } from "react-icons/md";
import {
  dataMenus,
  IDataMenu,
  IMenus,
  ISubMenus,
} from "../../constants/dataSidebar";
import { AG_URL } from "../../constants/constants";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  activeMenuState,
  currentColorState,
  screenSizeState,
} from "@/globalState/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { HandlePermission } from "@/services/permissions";
import { user_test } from "@/routes/requireAuth";

const Sidebar = () => {
  const navigate = useNavigate();
  // RECOIL
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState);
  const screenSize = useRecoilValue(screenSizeState);
  const currentColor = useRecoilValue(currentColorState);

  const [subMenuOpen, setSubMenuOpen] = useState<{
    labelMenu: string | null;
    index: number;
    status: boolean;
  }>({
    labelMenu: "",
    status: false,
    index: 0,
  });

  const handleCloseSideBar = () => {
    // setIsActive(valueId);
    if (
      activeMenu !== undefined &&
      screenSize !== undefined &&
      screenSize <= 900
    ) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    if (!activeMenu) {
      setSubMenuOpen({
        index: 0,
        labelMenu: "",
        status: false,
      });
    }
  }, [activeMenu]);
  // useEffect(() => {
  //   console.log("screenSize", screenSize);
  // }, [screenSize]);

  return (
    <div
      onMouseEnter={() => {
        // if (screenSize !== undefined && screenSize >= 900) {
        if (!verifyMobileScreenSize(screenSize)) {
          return setActiveMenu(true);
        }

        // }
      }}
      className={`h-[89%] overflow-hidden duration-300
      
      ${
        activeMenu
          ? "w-72"
          : !verifyMobileScreenSize(screenSize)
          ? "w-[70px]"
          : "hidden"
      }  fixed dark:bg-main-dark-bg duration-300 mainScroll h-screen
            border-r
            `}
      style={{
        // marginTop: "67px",
        // marginTop: "70px",
        margin: "2px",
        marginRight: "1px",
        marginLeft: "0px",
        // zIndex: 1000,
        background: "white",
      }}
    >
      <>
        <div className="mt-0 " style={{ marginTop: "0px" }}>
          {dataMenus.map((item: IDataMenu, index) => (
            <div key={index}>
              <p
                className={`text-[0.8rem] text-gray-400 dark:text-gray-400  ml-4 mt-1 mb-2 uppercase
              ${!activeMenu && "scale-0"}
              `}
              >
                {item.mainMenu}
              </p>
              {item.menus.map((menu: IMenus, idx: number) => (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      // handleCloseSideBar(menu.path);
                      // handleCloseSideBar();
                      if (
                        subMenuOpen.labelMenu === menu.label &&
                        subMenuOpen.index === idx &&
                        subMenuOpen.status === true
                      ) {
                        setSubMenuOpen({
                          ...subMenuOpen,
                          status: !subMenuOpen.status,
                        });
                      } else {
                        setSubMenuOpen({
                          labelMenu: menu.label,
                          index: idx,
                          status: true,
                        });
                      }
                      // ROUTES;
                      if (menu.path !== "/") {
                        if (menu.path === "/dashboard") return navigate(`/`);
                        else return navigate(menu.path);
                      }
                    }}
                    style={{
                      backgroundColor:
                        subMenuOpen.labelMenu === menu.label &&
                        subMenuOpen.index === idx
                          ? currentColor
                          : "",
                    }}
                    className={`duration-300 hover:bg-white-hover ${
                      subMenuOpen.labelMenu === menu.label &&
                      subMenuOpen.index === idx
                        ? "hover:text-white"
                        : "hover:text-main-color-dark"
                    }  ${
                      subMenuOpen.labelMenu === menu.label &&
                      subMenuOpen.index === idx
                        ? "text-white"
                        : ""
                    } flex  items-center justify-between gap-5 pl-4 pt-3 pb-2.5  cursor-pointer rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 text-xl`}
                  >
                    <span className="flex items-center space-x-2   font-medium">
                      <span className="text-lg">{menu.icon}</span>
                      <span
                        className={`capitalize text-sm m-0 p-0 ${
                          !activeMenu && "scale-0"
                        } `}
                      >
                        {menu?.label}
                      </span>
                    </span>
                    <span className="text-lg mr-5">
                      <BiChevronDown
                        className={` ${
                          subMenuOpen.labelMenu === menu.label &&
                          subMenuOpen.index === idx &&
                          subMenuOpen.status
                            ? "rotate-180 duration-300"
                            : "duration-300"
                        }`}
                      />
                    </span>
                  </div>
                  <div
                    className={`text-sm ml-12 cursor-pointer`}
                    // className={`text-sm ml-12 cursor-pointer ${
                    //   subMenuOpen.labelMenu === menu.label &&
                    //   subMenuOpen.index === idx &&
                    //   subMenuOpen.status
                    //     ? "duration-300"
                    //     : "duration-300"
                    // }`}
                  >
                    <motion.div
                      animate={
                        subMenuOpen.labelMenu === menu.label &&
                        subMenuOpen.status === true
                          ? { height: "fit-content" }
                          : { height: 0 }
                      }
                    >
                      {subMenuOpen.labelMenu === menu.label &&
                        subMenuOpen.status === true &&
                        menu?.subMenus?.map(
                          (item: ISubMenus, index_: number) => (
                            <>
                              {/* {HandlePermission.check(
                                item.permissions,
                                user_test.permissions
                              ) && ( */}

                              {6 > 2 && (
                                <NavLink
                                  to={`${item.path}`}
                                  key={index_}
                                  className={`cursor-pointer font-normal ${
                                    subMenuOpen.labelMenu === menu.label &&
                                    subMenuOpen.index === idx &&
                                    subMenuOpen.status
                                      ? "duration-300"
                                      : "duration-300"
                                  }`}
                                  onClick={() => handleCloseSideBar()}
                                  title={item.hoverTitle || ""}
                                >
                                  <p
                                    className={`flex text-gray-400 items-center space-x-1.4 text-sm m-1 duration-300 hover:text-main-color-dark`}
                                  >
                                    <span>
                                      <MdChevronRight />
                                    </span>
                                    <span
                                      className={`${!activeMenu && "scale-0"}`}
                                    >
                                      {item.label}
                                    </span>
                                  </p>
                                </NavLink>
                              )}
                            </>
                          )
                        )}
                    </motion.div>
                  </div>
                </>
              ))}
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
// TODO: Consider this later
export function verifyMobileScreenSize(screenSize: undefined | number) {
  return screenSize !== undefined && screenSize <= 700;
}

export function verifyScreenSize(
  screenSize: undefined | number,
  refValue: number
) {
  return screenSize !== undefined && screenSize <= refValue;
}
