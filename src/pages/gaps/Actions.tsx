"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/table-core";
import { GAP_ACTIONS_STATUS, IGap } from "@/types/stateSchema/gap";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "./columns";

function Actions({ gap }: { gap: any }) {
  const navigate = useNavigate();

  return (
    <div title="Actions">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 font-bold" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/gaps/detail/${gap.id}`);
            }}
          >
            Detail
          </DropdownMenuItem>

          <DropdownMenuItem
            className={`${styles.DropdownMenuItemClass}`}
            onClick={() => {
              navigate(
                `/gaps/actions/${GAP_ACTIONS_STATUS.VALIDATE_GAP}/${gap.id}`
              );
            }}
            // gaps/score-card/create
          >
            Investiguer
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/gaps/score-card/create/${gap.id}`);
            }}
          >
            Lier scoreCard
          </DropdownMenuItem>
          <DropdownMenuItem>Repondre</DropdownMenuItem>
          <DropdownMenuItem>Modifier</DropdownMenuItem>
          <DropdownMenuItem>Supprimer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Actions;
