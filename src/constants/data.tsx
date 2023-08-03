import { ReactNode } from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiTwotoneAlert,
  // AiOutlineAreaChart,
  // AiOutlineBarChart,
  // AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiCreditCard,
  // FiEdit,
  // FiPieChart,
  // FiBarChart,
  // FiStar,
  // FiShoppingCart,
} from "react-icons/fi";
import { BsCurrencyDollar, BsKanban, BsShield } from "react-icons/bs";
// import { BiColorFill } from "react-icons/bi";
import { IoMdAnalytics, IoMdContacts } from "react-icons/io";
// import { RiContactsLine, RiStockLine } from "react-icons/ri";
// import { MdOutlineSupervisorAccount } from "react-icons/md";
// import { HiOutlineRefresh } from "react-icons/hi";
// import { TiTick } from "react-icons/ti";
// import { GiLouvrePyramid } from "react-icons/gi";
// import { GrLocation } from "react-icons/gr";
// import ProductImg from "../../../public/images/product.jpg";
import { AG_URL } from "./constants";
import {
  MdCreateNewFolder,
  MdCrisisAlert,
  MdOutlineEditLocationAlt,
} from "react-icons/md";
import { FcOrganization } from "react-icons/fc";
import { BiSolidUserPlus } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
// import { PiUsersFourFill } from "react-icons/pi";
// import { IoCreateOutline } from "react-icons/io";
// MdCreateNewFolder;

export interface Ilinks {
  // permission: string;
  link: string;
  label: string;
  icon: ReactNode;
}
export interface ILink {
  title: string;
  // role: string;
  links: Ilinks[];
}

export const Menus = [
  {
    mainIcon: "",
    mainMemnu: "Dashboard",
    menus: [
      {
        label: "GAPS",
        path: "/gaps",
        icon: <MdOutlineEditLocationAlt />,
        permissions: "",

        subMenus: [
          {
            label: "Gestion gaps",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: "",
          },
          {
            label: "Creer",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: "",
          },
          {
            label: "Update",
            icon: <AiOutlineShoppingCart />,
            path: "/",
            permissions: "",
          },
        ],
      },
      {
        label: "Alerts",
        icon: <MdCrisisAlert />,
        path: "/",
        permissions: "",
      },
      {
        label: "Investigations",
        icon: <MdCrisisAlert />,
        path: "/",
        permissions: "",
      },
    ],
  },
  {
    mainMemnu: "Services",
    menus: [
      {
        label: "Organisations",
        icon: <FcOrganization />,
        path: "/",
        permissions: "",
        subMenus: [
          {
            label: "Gestion org.",
            icon: <MdCreateNewFolder />,
            path: "/organizations",
            permissions: "",
          },
          {
            label: "Creer",
            icon: <AiOutlineShoppingCart />,
            path: "/organizations/create",
            permissions: "",
          },
          {
            label: "Permissions",
            icon: <AiOutlineShoppingCart />,
            path: "/organizations/permissions",
            permissions: "",
          },
        ],
      },
    ],
  },
  {
    mainMemnu: "ANALYSE",
    menus: [
      {
        label: "GAPS01",
        icon: <AiOutlineShoppingCart />,
        path: "/",
        permissions: "",
        subMenus: [
          {
            label: "analyse gaps1",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/analytics",
            permissions: "",
          },
          {
            label: "analyse gaps2",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/analytics",
            permissions: "",
          },
          {
            label: "analyse gaps2",
            icon: <AiOutlineShoppingCart />,
            path: "/gaps/analytics",
            permissions: "",
          },
        ],
      },
    ],
  },
  {
    mainMemnu: "UTILISATEURS",
    menus: [
      {
        label: "Ulisateurs-1",
        icon: <FaUsers />,
        path: "/",
        permissions: "",
        subMenus: [
          {
            label: "Gestion utilisateurs",
            icon: <FaUsers />,
            path: "/users",
            permissions: "",
          },
          {
            label: "Créer",
            icon: <BiSolidUserPlus />,
            path: "/users/create",
            permissions: "",
          },
        ],
      },
      {
        label: "Ulisateurs-2",
        icon: <FaUsers />,
        path: "/",
        permissions: "",
        subMenus: [
          {
            label: "Liste",
            icon: <FaUsers />,
            path: "/users/profile/12",
            permissions: "",
          },
          {
            label: "Créer",
            icon: <BiSolidUserPlus />,
            path: "/users/create",
            permissions: "",
          },
        ],
      },
    ],
  },
];

export const links: ILink[] = [
  {
    title: "Dashboard",
    // role: "",
    links: [
      {
        // permission: "",
        label: "Gaps",
        link: "/gaps",
        icon: <MdOutlineEditLocationAlt />,
      },
      {
        // permission: "",
        label: "Alerts",
        link: "/alerts",
        icon: <MdCrisisAlert />,
      },
    ],
  },
  {
    title: "Organisations",
    links: [
      {
        label: "Organisations",
        link: "/organizations",
        icon: <FcOrganization />,
      },
      {
        label: "Créer",
        link: "/organizations/create",
        icon: <MdCreateNewFolder />,
      },
    ],
  },
  {
    title: "Gaps",
    links: [
      {
        label: "Gaps",
        link: "/gaps2",
        icon: <AiTwotoneAlert />,
      },
      {
        label: "Créer",
        link: "/gaps/create",
        icon: <MdCreateNewFolder />,
      },
    ],
  },
  {
    title: "utilisateurs",
    links: [
      {
        label: "Utilisateurs",
        link: "/users/profile/12",
        // icon: <PiUsersFourFill />,
        icon: <FaUsers />,
      },
      {
        label: "Créer",
        link: "/users/create",
        icon: <BiSolidUserPlus />,
      },
    ],
  },
  {
    title: "ANALYSE",
    links: [
      {
        label: "Gaps",
        link: "/gaps/analytics",
        icon: <BsKanban />,
      },
      {
        label: "Alerts",
        link: "/alerts/analytics",
        icon: <IoMdAnalytics />,
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
