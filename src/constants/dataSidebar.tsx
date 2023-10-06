import { ReactNode } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiCreditCard } from "react-icons/fi";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
// import { IoMdAnalytics, IoMdContacts } from "react-icons/io";
import { AG_URL } from "./constants";
import { GLOBAL_PERMISSIONS } from "../types/permissions";
import { MdCreateNewFolder } from "react-icons/md";
import { FcOrganization } from "react-icons/fc";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

type MainMemnu =
  | "Aperçu"
  | "Services"
  | "ANALYSE"
  | "UTILISATEURS"
  | "ORGANISATIONS"
  | "PYRAMIDE"
  | "SYSTEME";

type LabelMenus =
  | "GAPS"
  | "DASHBOARD"
  | "VULNERABILITES"
  | "ALERTES"
  | "Organisations"
  | "Utilisateurs"
  | "Gestion des DPS"
  | "Territoires"
  | "Zones de sante"
  | "Aires de santé"
  | "Parametres";

export interface IMenus {
  label: LabelMenus;
  path: string;
  icon: ReactNode;
  permissions: GLOBAL_PERMISSIONS;
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
    mainMenu: "Aperçu",
    menus: [
      {
        label: "DASHBOARD",
        path: "/dashboard",
        icon: <ImHome3 />,
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          // {
          //   label: "Gestion gaps",
          //   icon: <AiOutlineShoppingCart />,
          //   path: "/",
          //   permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          // },
          // {
          //   label: "Creer",
          //   icon: <AiOutlineShoppingCart />,
          //   path: "/",
          //   permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          // },
          // {
          //   label: "Update",
          //   icon: <AiOutlineShoppingCart />,
          //   path: "/",
          //   permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          // },
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
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Organisations",
            icon: <MdCreateNewFolder />,
            path: "/organizations/0",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },

          {
            label: "Creer",
            icon: <AiOutlineShoppingCart />,
            path: "/organizations/create",
            permissions: GLOBAL_PERMISSIONS.CREATE_ORAGNIZATION,
          },
          // {
          //   label: "Permissions",
          //   icon: <AiOutlineShoppingCart />,
          //   path: "/organizations/permissions",
          //   permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          // },
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
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste des gaps",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer un gap",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/create",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer score card",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/score-card/create",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
      {
        label: "ALERTES",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste alertes",
            icon: <AiOutlineShoppingCart />,
            path: "/alerts",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer alerte",
            icon: <AiOutlineShoppingCart />,
            path: "/alerts/create",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
      {
        label: "VULNERABILITES",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Liste des vulnerab.",
            icon: <AiOutlineShoppingCart />,
            path: "/vulnerabilities",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Ajouter un vulnerab.",
            icon: <AiOutlineShoppingCart />,
            path: "/vulnerabilities/create",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
        ],
      },
    ],
  },
  {
    mainIcon: "",
    mainMenu: "SYSTEME",
    menus: [
      {
        label: "Parametres",
        icon: <FaUsers />,
        path: "/",
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Gestion des roles",
            icon: <FaUsers />,
            path: "/permissions/roles",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Gestions de permissions",
            icon: <BiSolidUserPlus />,
            path: "/permissions/",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Gestions des affectations",
            icon: <BiSolidUserPlus />,
            path: "/permissions/assignments",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Gestions des medicaments",
            icon: <BiSolidUserPlus />,
            path: "/medicaments",
            permissions: GLOBAL_PERMISSIONS.READ_MEDICAMENTS,
          },
          {
            label: "Gestions des typePersonnels",
            icon: <BiSolidUserPlus />,
            path: "/typePersonnels",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Gestions des maladies",
            icon: <BiSolidUserPlus />,
            path: "/maladies",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Gestions des crises",
            icon: <BiSolidUserPlus />,
            path: "/crises",
            permissions: GLOBAL_PERMISSIONS.READ_CRISES,
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
        label: "Gestion des DPS",
        icon: <FaUsers />,
        path: "/pyramid",
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [],
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
        permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
        subMenus: [
          {
            label: "Gestion utilisateurs",
            icon: <FaUsers />,
            path: "/users",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
          },
          {
            label: "Créer",
            icon: <BiSolidUserPlus />,
            path: "/users/create",
            permissions: GLOBAL_PERMISSIONS.MANAGE_GAP,
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
