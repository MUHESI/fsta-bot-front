"use client";
import React, { useState } from "react";
import { IUser } from "@/types/stateSchema/user";
import { ColumnDef } from "@tanstack/table-core";
import { NavLink } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import CreateTypePersonnel from "../createTypePersonnel";
import { styles } from "../gaps/columns";
import { GrFormView } from "react-icons/gr";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { deleteAPI } from "@/utils/fetchData";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { confirmDialog } from "@/components/shared/confirmDialog";

export const columnsListUsers: ColumnDef<IUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <NavLink
        to={`/users/profile/${row.getValue("id")}`}
        className={`cursor-pointer font-normal`}
      >
        {row.id}
      </NavLink>
    ),
  },
  {
    accessorKey: "full_name",
    header: "NOMS",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <NavLink
        to={`/users/profile/${row.getValue("id")}`}
        className={`cursor-pointer font-normal`}
      >
        {row.getValue("full_name")}
      </NavLink>
    ),
  },
  // {
  //   accessorKey: "organization",
  //   header: "ORGANISATION",
  //   cell: ({ row }: { row: { [key: string]: any } }) => {
  //     const user: any = row.original;
  //     const {
  //       affectation_p: { organisation },
  //     } = user;

  //     return <div>{organisation?.name} </div>;
  //   },
  // },

  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <div className="font-semibold text-green-600">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
      const user: IUser = row.original;
      const userlogged = useRecoilValue(userAuthenticatedState);

      const [closeDiaolg, setCloseDialog] = useState(0);
      // const deleteUser = () => {};
      const deleteUser = async () => {
        // if (formTypePersonnel.name.trim().length < 2) {
        //   return showToast({
        //     msg: `Remplissez tous les champs`,
        //     type: StatusToast.DARK,
        //   });
        // }
        try {
          // setInfoLoading(
          //   HandleFormObject.handleSecondLevel(
          //     infoLoading,
          //     { fKey: "createTypePers", lKey: "status" },
          //     true
          //   )
          // );
          const { data } = await deleteAPI<
            IFetchData<IBaseData>,
            { userid: string }
          >("users/deleteuser", { userid: user.id }, userlogged.token);

          console.clear();
          console.log("data", data);

          if (data) {
            // setInfoLoading(
            //   HandleFormObject.handleSecondLevel(
            //     infoLoading,
            //     { fKey: "createTypePers", lKey: "status" },
            //     false
            //   )
            // );
            // showToast({
            //   msg: `La création du type de personnel ${formTypePersonnel.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
            //   type: AG_Toast.statusToast.SUCCESS,
            // });
            // setFormTypePersonnel({ ...INIT_FORM_CREATE_ROLE });
            // refreshTypePers();
            // if (setCloseDialog) setCloseDialog(closeDialog());
          }
        } catch (error: any) {
          console.clear();
          console.log("error", error);
          // setInfoLoading(
          //   HandleFormObject.handleSecondLevel(
          //     infoLoading,
          //     { fKey: "createTypePers", lKey: "status" },
          //     false
          //   )
          // );
          // return showToast({
          //   msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
          //   type: StatusToast.ERROR,
          // });
        }
      };
      return (
        <div className="flex gap-1">
          <span className={`${styles.DropdownMenuItemClass} text-red-400`}>
            <span>
              <GrFormView />
            </span>
          </span>
          <DialogCustom
            openDilog={closeDiaolg}
            mainTitle="Modification du type de personnel"
            width="sm"
            mainBtnOptions={{
              icon: <AiFillEdit />,
              useIcon: true,
            }}
          >
            <CreateTypePersonnel
              // itemToUpdate={user}
              setCloseDialog={setCloseDialog}
            />
          </DialogCustom>

          <span
            className={`${styles.DropdownMenuItemClass} text-red-400`}
            onClick={() => {
              if (!confirmDialog()) return;
              console.clear();
              console.log("first");
              deleteUser();
            }}
          >
            <span>
              <AiTwotoneDelete />
            </span>
          </span>
        </div>
      );
    },
  },
];
