import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { columnsListPermissions } from "./columns";
import SkeletonAnimation from "@/components/skeleton";
import {
  currentProvinceIDState,
  getPermissions,
  screenSizeState,
} from "@/globalState/atoms";
import { IPermission } from "@/types/stateSchema/permission";
import CreatePermission from "../createPermission";
import DialogCustom from "@/components/core/DialogCustom";
import { CustomButton } from "@/components/core/Button";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { verifyScreenSize } from "@/components/core/Sidebar";
import { useNavigate } from "react-router";
import { IResRecoil } from "@/types/commonTypes";

function Permissions() {
  const resPermissions = useRecoilValue(
    getPermissions
  ) as unknown as IResRecoil<IPermission[]>;
  const screenSize = useRecoilValue(screenSizeState);

  return (
    <div>
      <div className="px-5">
        {verifyScreenSize(screenSize, 700) ? (
          <>
            <MobileScreenPermissions dataPermissions={resPermissions.data} />
          </>
        ) : (
          <>
            <DesktopScreenPermission listPermissions={resPermissions.data} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

function MobileScreenPermissions({
  dataPermissions,
}: {
  dataPermissions: IPermission[];
}) {
  return (
    <div>
      {dataPermissions.map((item: any, key: number) => (
        <div
          key={key}
          className="my-2 border shadow hover:shadow-md rounded  flex justify-between items-center p-1 py-2"
        >
          <div className="cursor-pointer" title="voir le detail">
            <div className="">
              <h4 className="text-sm text-gray-400">Noms</h4>
              <div className="text-sm p-0 m-0 pl-2 font-bold ">
                {item.full_name}
              </div>
            </div>
            <div className="">
              <h4 className="text-sm text-gray-400">Telephone</h4>
              <div className="text-sm pl-2 font-bold">{`${item.phone}`}</div>
            </div>
          </div>
          <div>
            <div className="text-sm pl-2">{/* <Actions gap={item} /> */}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopScreenPermission({
  listPermissions,
}: {
  listPermissions: any[];
}) {
  const navigate = useNavigate();
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);

  return (
    <div>
      <DataTable
        searchField="psedo"
        columns={columnsListPermissions}
        data={listPermissions || []}
      >
        <CustomButton
          onClick={() => ""}
          label="Actualiser"
          className="rounded-md"
          // statusLoading={true}
        />

        <DialogCustom
          btnText="Nouvelle permission"
          mainTitle="Création d'une nouvelle permission"
          width="sm"
        >
          <CreatePermission />
        </DialogCustom>
      </DataTable>
    </div>
  );
}

function ListPermissions() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Toutes les permissions"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Permissions />
      </Suspense>
    </div>
  );
}

export default ListPermissions;
