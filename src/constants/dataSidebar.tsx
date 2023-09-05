import { ReactNode } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { BsCurrencyDollar, BsKanban, BsShield } from "react-icons/bs";
import { IoMdAnalytics, IoMdContacts } from "react-icons/io";
import { AG_URL } from "./constants";
import { PERMISSIONS } from "../types/permissions";
import {
  MdCreateNewFolder,
  MdCrisisAlert,
  MdOutlineEditLocationAlt,
} from "react-icons/md";
import { FcOrganization } from "react-icons/fc";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

type MainMemnu =
  | "Dashboard"
  | "Services"
  | "ANALYSE"
  | "UTILISATEURS"
  | "ORGANISATIONS"
  | "PYRAMIDE";

type LabelMenus =
  | "GAPS"
  | "GAPS GLOBALS"
  | "VULNERABILITES"
  | "ALERTES"
  | "Organisations"
  | "Utilisateurs"
  | "Gestion adresses"
  | "Territoires"
  | "Zones de sante"
  | "Aires de santé";

export interface IMenus {
  label: LabelMenus;
  path: string;
  icon: ReactNode;
  permissions: PERMISSIONS;
  subMenus: ISubMenus[];
}

export interface ISubMenus
  extends Pick<IMenus, "icon" | "path" | "permissions"> {
  label: string;
  hoverTitle?: string;
}

export interface IDataMenu {
  mainIcon: ReactNode | string;
  mainMenu: MainMemnu;
  menus: IMenus[];
}
export const dataMenus: IDataMenu[] = [
  {
    mainIcon: "",
    mainMenu: "Dashboard",
    menus: [
      {
        label: "GAPS GLOBALS",
        path: "/gaps-dashboard",
        icon: <MdOutlineEditLocationAlt />,
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Gestion gaps",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Creer",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Update",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
  {
    mainIcon: "",
    mainMenu: "ORGANISATIONS",
    menus: [
      {
        label: "Organisations",
        icon: <FcOrganization />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Gestion org.",
            icon: <MdCreateNewFolder />,
            path: "/organizations",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Creer",
            icon: <AiOutlineShoppingCart />,
            path: "/organizations/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Permissions",
            icon: <AiOutlineShoppingCart />,
            path: "/organizations/permissions",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
  {
    mainIcon: "",
    mainMenu: "ANALYSE",
    menus: [
      {
        label: "GAPS",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste des gaps",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer un gap",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer score card",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/score-card/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
      {
        label: "ALERTES",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste alertes",
            icon: <AiOutlineShoppingCart />,
            path: "/alerts",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer alerte",
            icon: <AiOutlineShoppingCart />,
            path: "/alerts/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
      {
        label: "VULNERABILITES",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste des vulnerab.",
            icon: <AiOutlineShoppingCart />,
            path: "/vulnerabilities",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Ajouter un vulnerab.",
            icon: <AiOutlineShoppingCart />,
            path: "/vulnerabilities/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
  {
    mainIcon: "",
    mainMenu: "PYRAMIDE",
    menus: [
      {
        label: "Gestion adresses",
        icon: <FaUsers />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Provinces",
            icon: <FaUsers />,
            path: "/pyramid/provinces/",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Territoires",
            icon: <FaUsers />,
            path: "/pyramid/territories",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Aires de santé",
            icon: <FaUsers />,
            path: "/pyramid/healthAreas",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
  {
    mainIcon: "",
    mainMenu: "UTILISATEURS",
    menus: [
      {
        label: "Utilisateurs",
        icon: <FaUsers />,
        path: "/",
        permissions: PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Gestion utilisateurs",
            icon: <FaUsers />,
            path: "/users",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer",
            icon: <BiSolidUserPlus />,
            path: "/users/create",
            permissions: PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
];

export const chatData = [
  {
    image: AG_URL.USER_IMG_PROFILE,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: AG_URL.USER_IMG_PROFILE,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: AG_URL.USER_IMG_PROFILE,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: AG_URL.USER_IMG_PROFILE,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export interface IUserProfile {
  icon: ReactNode;
  title: string;
  desc: string;
  iconColor: string;
  iconBg: string;
}

export const userProfileData: IUserProfile[] = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
