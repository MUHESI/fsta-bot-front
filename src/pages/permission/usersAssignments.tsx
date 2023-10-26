import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination, dataUsers } from "@/constants/constants";
import { columnsListUsers } from "./userColumns";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getUsers } from "@/globalState/atoms/user";
import { IUser } from "@/types/stateSchema/user";
import { verifyScreenSize } from "@/components/core/Sidebar";
import { currentProvinceIDState, screenSizeState } from "@/globalState/atoms";
import { useNavigate } from "react-router";
import ShowPermissionUser from "../showPermissionUser";
import DialogCustom from "@/components/core/DialogCustom";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import DeletePermissions from "../deletePermissions";
import AddPermissions from "../addPermissions";

function UsersAssignments() {
  const listUsers = useRecoilValue(getUsers) as unknown as IUser[];
  const screenSize = useRecoilValue(screenSizeState);

  return (
    <div>
      <div className="p-5">
        {verifyScreenSize(screenSize, 700) ? (
          <>
            <MobileScreenPermissions dataUsers={listUsers} />
          </>
        ) : (
          <>
            <DesktopScreenUsers dataUsers={listUsers} />
          </>
        )}
      </div>
    </div>
  );
}

function MobileScreenPermissions({ dataUsers }: { dataUsers: IUser[] }) {
  const navigate = useNavigate();

  return (
    <div>
      {dataUsers.map((item: any, key: number) => (
        <div
          key={key}
          className="my-2 border shadow hover:shadow-md rounded  flex justify-between items-center p-1 py-2"
        >
          <div
            className="cursor-pointer"
            title="voir le detail"
            onClick={() => {
              navigate(`/users/profile/${item.id}`);
            }}
          >
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
            <div className="text-sm pl-2">
              <HandlePermission item={item} />
              {/* <Actions gap={item} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopScreenUsers({ dataUsers }: { dataUsers: any[] }) {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);

  return (
    <div>
      <DataTable
        searchField="full_name"
        columns={columnsListUsers}
        data={dataUsers}
      >
        <Button
          onClick={() => {}}
          variant="outline"
          className="ml-auto rounded-full"
        >
          <FiRefreshCcw />
        </Button>
      </DataTable>
      <CustomPagination
        dataPagination={dataPagination.pagination}
        nextPage={() => console.log("next")}
        previousPage={() => console.log("next")}
      />
    </div>
  );
}

export function HandlePermission({ item }: { item: any }) {
  const navigate = useNavigate();

  const [tabId, setTabId] = useState<number>(0);
  return (
    <DialogCustom
      btnText="Gerer"
      mainTitle="Gestion des permissions"
      width="sm"
      classNameBtn="max-w-[80px]"
    >
      <TabMenuCustom
        dataTabs={["Permissions", "Supprimer", "Affectater"]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className="m-4">
        {tabId === 0 && (
          <>
            {item.metaData.permissions.map((item_: any, key: number) => (
              <div key={key}>
                <h4 className="bordeer border-b pb-1">
                  <span
                    className="text-main-color"
                    onClick={() => {
                      navigate(`/users/profile/${item.id}`);
                      // console.clear();
                      // console.log("item", item);
                    }}
                  >
                    {item_?.organisation?.name}{" "}
                  </span>
                </h4>
                <ShowPermissionUser dataPermissions={item_.allpermission} />
              </div>
            ))}
          </>
        )}
        {tabId === 1 && <DeletePermissions currentUser={item} />}
        {tabId === 2 && <AddPermissions currentUser={item} />}
      </div>
    </DialogCustom>
  );
}

function ListUsersAssignments() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Affectations"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <UsersAssignments />
      </Suspense>
    </div>
  );
}

export default ListUsersAssignments;
