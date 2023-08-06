import { Link, NavLink } from "react-router-dom";
import { MdChevronRight, MdOutlineCancel } from "react-icons/md";
import { Menus } from "../../constants/data";
import { AG_URL } from "../../constants/constants";
import { useStateContext } from "../../contexts/contextPorvider";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  // const [isActive, setIsActive] = useState("");
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

  return (
    <div
      onMouseEnter={() => {
        if (screenSize !== undefined && screenSize >= 900)
          return setActiveMenu(true);
      }}
      className={`${
        activeMenu ? "w-72" : "w-20"
      }  fixed dark:bg-main-dark-bg duration-300 mainScroll h-screen
            border-r
            `}
      style={{
        margin: "2px",
        marginRight: "1px",
        marginLeft: "0px",
        // zIndex: 1000,
        background: "white",
      }}
    >
      <>
        <div
          className={`${
            activeMenu ? "w-72" : "w-20"
          } flex fixed justify-between bg-white items-center border-b p-2   m-0 `}
          style={{
            transform: "translate(-3px, -3px)",
            height: "67px",
            // margin: "0px",
            // padding: "0px",
            // zIndex: 1000,
          }}
        >
          <Link
            to="/"
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          >
            <img
              src={AG_URL.LOGO_AFIA_GAP}
              className="w-20 object-cover"
              alt="LOGO_AFIA_GAP"
            />
            <span className={`${!activeMenu ? "scale-0" : ""}`}>AFIA GAP </span>
          </Link>
          <button
            type="button"
            onClick={() => setActiveMenu(!activeMenu)}
            style={{ color: currentColor }}
            className="text-xl t rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="mt-10 " style={{ marginTop: "80px" }}>
          {Menus.map((item: any, index) => (
            <div key={index}>
              <p
                className={`text-[0.8rem] text-gray-400 dark:text-gray-400  ml-4 mt-1 mb-2 uppercase
              ${!activeMenu && "scale-0"}
              `}
              >
                {item.mainMemnu}
              </p>
              {item.menus.map((menu: any, idx: number) => (
                <>
                  <div
                    key={index}
                    onClick={() => {
                      // handleCloseSideBar(menu.path);
                      handleCloseSideBar();
                      if (
                        subMenuOpen.labelMenu === menu.label &&
                        subMenuOpen.index === idx &&
                        subMenuOpen.status === true
                      ) {
                        return setSubMenuOpen({
                          ...subMenuOpen,
                          status: !subMenuOpen.status,
                        });
                      } else {
                        return setSubMenuOpen({
                          labelMenu: menu.label,
                          index: idx,
                          status: true,
                        });
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
                        menu?.subMenus?.map((item: any, index_: number) => (
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
                          >
                            <p
                              className={`flex text-gray-400 items-center space-x-1.4 text-sm m-1 duration-300 hover:text-main-color-dark`}
                            >
                              <span>
                                <MdChevronRight />
                              </span>
                              <span className={`${!activeMenu && "scale-0"}`}>
                                {item.label}
                              </span>
                            </p>
                          </NavLink>
                        ))}
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
