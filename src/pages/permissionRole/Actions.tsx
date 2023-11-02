"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GAP_ACTIONS_STATUS, IGap } from "@/types/stateSchema/gap";
import { useNavigate } from "react-router-dom";
// import { styles } from "./columns";
import { FaEye, FaLink } from "react-icons/fa";
import { AiOutlineEye, AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { GrValidate } from "react-icons/gr";
import { styles } from "../gaps/columns";
import DialogCustom from "@/components/core/DialogCustom";
import CreateRole from "../createRole";

function RoleActions({ role }: { role: any }) {
  const navigate = useNavigate();

  return (
    <div title="Actions">
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 font-bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white min-w-[200px] border"
        >
          <DropdownMenuLabel className="border-b">Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/gaps/detail/${role.id}`);
            }}
            className={`${styles.DropdownMenuItemClass}`}
          >
            <AiOutlineEye />
            <span>Voir detail</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={`${styles.DropdownMenuItemClass}`}
            onClick={() => {
              navigate(
                `/gaps/actions/${GAP_ACTIONS_STATUS.VALIDATE_GAP}/${role.id}`
              );
            }}
            // gaps/score-card/create
          >
            <GrValidate />
            <span>Investiguer</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/gaps/score-card/create/${role.id}`);
            }}
            className={`${styles.DropdownMenuItemClass} text-green-400 hover:text-green-500`}
          >
            <FaLink />
            <span>Lier le score</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/gaps/score-card/create/${role.id}`);
            }}
            className={`${styles.DropdownMenuItemClass}`}
          >
            <FaEye />
            <span>Voir le score</span>
          </DropdownMenuItem>
          <DropdownMenuItem className={`${styles.DropdownMenuItemClass}`}>
            {/* <AiTwotoneEdit />
            <span>Editer</span> */}
      {/* <DialogCustom
              btnText="Nouveau role"
              mainTitle="Création d'un nouveau role"
              width="sm"
            >
              <CreateRole />
            </DialogCustom>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${styles.DropdownMenuItemClass} text-red-400 hover:text-red-500`}
          >
            <AiTwotoneDelete />
            <span>Supprimer</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <DialogCustom
        mainBtnOptions={{
          btnText: "Nouveau role",
          useBtn: true,
        }}
        mainTitle="Création d'un nouveau role"
        width="sm"
      >
        <CreateRole />
      </DialogCustom>
    </div>
  );
}

export default RoleActions;