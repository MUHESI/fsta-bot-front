import React, { PropsWithChildren } from "react";
import { BiChevronRight } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";

// TODO:MOVE THIS LATER
export const textBrightOrange = "text-[#f5803e]";

export interface ICardNumberItemProps {
  numberItems: number | string;
  tag: string;
  link: string;
}

// TODO: CHANGE THE NAME OF THIS CARD later
export function CardNumberItem({
  link,
  numberItems,
  tag,
  children,
}: PropsWithChildren<ICardNumberItemProps>) {
  return (
    <div
      className=" my-2 bg-no-repeat bg-cover  shadow rounded-md px-1 flex flex-col justify-between"
      style={{
        backgroundColor: "#f2f2f2",
        backgroundImage:
          "url(https://res.cloudinary.com/chanel-muhesi/image/upload/v1695722415/afia-gap/msedge_I4Ge4ntpvw_qh2jxq.png)",
      }}
    >
      <h6 className="text-sm inline text-gray-400">{`#${tag}`} </h6>
      <div className="flex  items-end gap-1">
        <div
          className=" text-main-color text-[0.6em]"
          style={{ transform: "translateY(-7px)" }}
        >
          {children}
        </div>
        <span className={` ${textBrightOrange} text-[0.80em] `}>
          {numberItems}K{" "}
        </span>
      </div>
      <p
        className={`cursor-pointer font-bold flex items-center  text-main-color text-[0.3em]`}
      >
        <NavLink to={`${link}`} className="hover:underline">
          Voir plus{" "}
        </NavLink>
        <span>
          <BiChevronRight className="text-xl" />
        </span>
      </p>
    </div>
  );
}
