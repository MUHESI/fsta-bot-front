import { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AG_URL, defaultStateUserAuth } from "../../constants/constants";
import { RiNotification3Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import Notification from "../profile/Notification";
import { useEffect } from "react";
import UserProfile from "../profile/UserProfile";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  activeMenuState,
  currentColorState,
  isCLickedState,
  screenSizeState,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { verifyMobileScreenSize } from "./Sidebar";
import { Tooltip } from "@mui/material";
import { IAutherUSer } from "@/types/stateSchema/auth";
import { IMetadataAuthUser } from "@/types/storageTypes";
import { getInfoUser } from "@/globalState/atoms/user";
import { IUser } from "@/types/stateSchema/user";

type INavButtonProps = {
  customFunc: () => void;
  icon: ReactNode;
  color: string;
  dotColor?: string;
  title: string;
};
const NavButton = ({ customFunc, icon, color, dotColor }: INavButtonProps) => (
  <button
    type="button"
    onClick={() => customFunc()}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();

  // RECOIL
  const [user, setUser] = useRecoilState(userAuthenticatedState);
  const currentColor = useRecoilValue(currentColorState);
  const isClicked = useRecoilValue(isCLickedState);
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState);
  const [screenSize, setScreenSize] = useRecoilState(screenSizeState);

  const logout = () => {
    setUser({ ...defaultStateUserAuth });
    LocalStorage.removeItem(keyStorage.AFIAGAP_AUTH_USER);
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize === undefined) {
      return;
    }
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  // const [currentUser, setCurrentUser] = useState<IUser | any>({});

  // const currentUser_ = useRecoilValue(
  //   getInfoUser({ idUser: user.id, token: user.token })
  // ) as unknown as any;

  // const checkAuthUser = () => {
  //   const dataSaved = LocalStorage.getItem<{
  //     data: IAutherUSer;
  //     metadata: IMetadataAuthUser | null;
  //   }>(keyStorage.AFIAGAP_AUTH_USER);
  //   if (dataSaved === null) {
  //     return;
  //   } else {
  //     const { data } = dataSaved;
  //     console.clear();
  //     console.log("data, ", data);
  //     // setcurrentUser(data);
  //   }
  // };
  // useEffect(() => {
  //   if (Object.keys(currentUser_).length > 0) {
  //     setCurrentUser(currentUser_);
  //   }
  //   checkAuthUser();
  // }, [currentUser_]);
  // DESKTOP_NAVBAR
  function DesktopNavbar() {
    return (
      <div className="flex m-0 justify-between">
        <div className="flex items-center">
          <div className=" items-center  gap-3  flex  font-extrabold tracking-tight dark:text-white ">
            <img
              src={AG_URL.LOGO_AFIA_GAP}
              className="w-[68px] object-cover"
              alt="LOGO_AFIA_GAP"
            />
            <span
              className={`text-xl text-slate-600 w-[137px] ${
                !activeMenu && "scale-0 hidden"
              }`}
            >
              AFIA GAP
            </span>
          </div>
          <div className=" border-r border-l border-t p-3  cursor-pointer">
            <NavButton
              title="Menu"
              customFunc={handleActiveMenu}
              color={currentColor}
              icon={<AiOutlineMenu />}
            />
          </div>
          <div
            className={`flex space-x-2 items-center text-slate-400 p-3 ${
              screenSize !== undefined && screenSize < 800 && "hidden"
            }`}
          >
            <BsSearch className={`text-2xl `} />
            <input
              placeholder="Rechercher..."
              className={`w-[80%] duration-100  py-1 px-2 m-0 outline-none  border-none focus:outline-none  text-slate-400 text-lg`}
              type="seach"
            />
          </div>
        </div>
        <div
          className={`flex ${
            screenSize !== undefined && screenSize < 600 && "hidden"
          }`}
        >
          <div className="border-x border-t p-3">
            <NavButton
              title="Notification"
              // dotColor="rgb(254, 201, 15)"
              customFunc={() => console.clear()}
              color={currentColor}
              icon={<BiMessageSquareDetail />}
            />
          </div>
          <div className="border-r border-t p-3">
            <NavButton
              title="Notification"
              dotColor="rgb(254, 201, 15)"
              customFunc={() => console.clear()}
              color={currentColor}
              icon={<RiNotification3Line />}
            />
          </div>
          <div className="border-r border-t p-3 p-3">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              // onClick={() => handleClick("userProfile")}
            >
              <Tooltip title={user.full_name || ""}>
                <img
                  onClick={() => navigate(`/users/profile/${user.id}`)}
                  className="rounded-full w-8 h-8"
                  src={AG_URL.USER_IMG_PROFILE}
                  alt="user-profile"
                />
              </Tooltip>
              {/* <p>m
              <span className="text-gray-400 text-lg ">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-lg ">
                Moses
              </span>
            </p> */}
            </div>
          </div>
          <div className="border-r border-t p-3">
            <Tooltip title={"Deconnexion"}>
              <NavButton
                title="Notification"
                color={currentColor}
                customFunc={() => logout()}
                icon={<BiExit />}
              />
            </Tooltip>
          </div>
        </div>
        {/* MOBILE MENU  */}
        <div
          className={` ${
            screenSize !== undefined && screenSize < 600 ? "flex" : "hidden"
          }`}
        >
          <div className="border-r border-t p-3 ">
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <Tooltip title="Profile">
                <img
                  onClick={logout}
                  className="rounded-full w-8 h-8"
                  src={AG_URL.USER_IMG_PROFILE2}
                  alt="user-profile"
                />
              </Tooltip>
            </div>
          </div>
          <div className="border-r border-t p-3">
            <NavButton
              title="Notification"
              customFunc={() => console.clear()}
              color={currentColor}
              icon={<IoMdSettings />}
            />
          </div>
        </div>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    );
  }

  // MOBILE_NAVBAR
  function MobileNavbar() {
    return (
      <div className="flex m-0 justify-between">
        <div className="flex items-center">
          <div className=" border-r border-l p-3  cursor-pointer">
            <NavButton
              title="Menu"
              customFunc={handleActiveMenu}
              color={currentColor}
              icon={<AiOutlineMenu />}
            />
          </div>
        </div>
        <img
          src={AG_URL.LOGO_AFIA_GAP}
          className="w-[80px] object-cover"
          alt="LOGO_AFIA_GAP"
        />
        <div className={`flex`}>
          <div className="border-x border-t p-3">
            <NavButton
              title="Notification"
              // dotColor="rgb(254, 201, 15)"
              customFunc={() => logout()}
              color={currentColor}
              icon={<BiExit />}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="m-0 border-b w-full md:mr-0.5 relative bg-white h-[70px]">
      {verifyMobileScreenSize(screenSize) ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )}
    </div>
  );
};

export default Navbar;
