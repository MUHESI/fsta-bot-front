import React, { ReactNode } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AG_URL, defaultStateUserAuth } from "../../constants/constants";
import { RiNotification3Line } from "react-icons/ri";
import Notification from "../profile/Notification";
import { useEffect } from "react";
import UserProfile from "../profile/UserProfile";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
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

function Navbar() {
  const navigate = useNavigate();

  // RECOIL
  const setUser = useSetRecoilState(userAuthenticatedState);
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
    console.clear();
    console.log("first", activeMenu);
    setActiveMenu(!activeMenu);
  };

  return (
    <div
      className="flex m-0 justify-between w-full md:mr-0.5 relative bg-white h-[67px]
    "
    >
      <div className="flex ">
        <div className=" border-r border-t p-3  cursor-pointer">
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
            <img
              // onClick={() => navigate("/users/profile/10")}
              onClick={logout}
              className="rounded-full w-8 h-8"
              src={AG_URL.USER_IMG_PROFILE2}
              alt="user-profile"
            />
            {/* <p>
              <span className="text-gray-400 text-lg ">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-lg ">
                Moses
              </span>
            </p> */}
          </div>
        </div>
        <div className="border-r border-t p-3">
          <NavButton
            title="Notification"
            color={currentColor}
            customFunc={() => console.clear()}
            icon={<IoMdSettings />}
          />
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
            <img
              onClick={logout}
              className="rounded-full w-8 h-8"
              src={AG_URL.USER_IMG_PROFILE2}
              alt="user-profile"
            />
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

export default Navbar;
