"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IOrganization } from "@/types/stateSchema/organization";
import { useNavigate } from "react-router";
import DialogCustom from "@/components/core/DialogCustom";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getIndicateurs } from "@/globalState/atoms/indication";
import { IBaseData, IFetchData, IResRecoil } from "@/types/commonTypes";
import { IIndicateur } from "@/types/stateSchema/indication";
import { CommonSelectGap } from "@/components/core/select";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { IStateLoading } from "@/types/stateSchema/loading";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { getOrganizations, userAuthenticatedState } from "@/globalState/atoms";
import { postAPI } from "@/utils/fetchData";

export const columnsListOrganizations: ColumnDef<IOrganization>[] = [
  {
    accessorKey: "name",
    header: "NOMS",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }: any) => {
      const org: any = row.original;
      return <div className="">{`${org.phone}`}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: any) => {
      const org: any = row.original;
      return <div className="">{`${org.email}`}</div>;
    },
  },
  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
      const org: IOrganization = row.original;
      return (
        <div>
          <ActionsOrg item={org} />
        </div>
      );
    },
  },
];

export function ActionsOrg({ item }: { item: any }) {
  const navigate = useNavigate();
  const [tabId, setTabId] = useState<number>(0);
  const [closeDiaolg, setCloseDialog] = useState(0);

  // const submitindicators = () => {};

  return (
    <DialogCustom
      openDilog={closeDiaolg}
      mainBtnOptions={{
        btnText: "Indicateurs",
        useBtn: true,
        classNameBtn: "max-w-[80px]",
      }}
      mainTitle="Gestion des indicateurs"
      width="sm"
    >
      <TabMenuCustom
        dataTabs={["Indicateurs", "Ajouter"]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className="my-2">
        {tabId === 0 && (
          <div className="my-2  mx-2 px-2 border rounded-md">
            Listes des indc
          </div>
        )}
        {tabId === 1 && (
          <>
            <CreateIndOrg organisation={item} />
          </>
        )}
      </div>
    </DialogCustom>
  );
}

function CreateIndOrg({ organisation }: { organisation: IOrganization }) {
  const user = useRecoilValue(userAuthenticatedState);
  const resOrganizations = useRecoilValue(
    getOrganizations
  ) as unknown as IResRecoil<IOrganization[]>;
  const resIndicators = useRecoilValue(getIndicateurs) as unknown as IResRecoil<
    IIndicateur[]
  >;
  const refreshOrg = useRecoilRefresher_UNSTABLE(getOrganizations);

  const [formIndicator, setFormIndicator] = useState("");
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createIndicOrg: {
      status: false,
      msg: "",
    },
  });

  const submitindicators = async (idIndic: string) => {
    // if (formIndicator.trim() === "") {
    //   return showToast({
    //     msg: `Remplissez tous les champs`,
    //     type: StatusToast.DARK,
    //   });
    // }
    console.clear();
    console.log("organisation.id", organisation.id);
    console.log("idIndic", idIndic);
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createIndicOrg", lKey: "status" },
          true
        )
      );

      const { data } = await postAPI<IFetchData<IBaseData>, any>(
        "org_ind",
        { orgid: organisation.id, indicateurid: idIndic },
        user.token
      );

      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createIndicOrg", lKey: "status" },
            false
          )
        );
        showToast({
          msg: `Cet indicateur ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        // setFormIndicator("");
        refreshOrg();
      }
    } catch (error: any) {
      console.log("error", error);
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createIndicOrg", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
        type: StatusToast.ERROR,
      });
    }
  };
  return (
    <div className="my-4 py-4 px-2 border rounded">
      <CommonSelectGap
        data={resIndicators.data}
        label="Semaine épidemiologique"
        keyObject="name"
        onChange={(value: string) => {
          submitindicators(value);
        }}
        value={formIndicator}
      />
    </div>
  );
}
