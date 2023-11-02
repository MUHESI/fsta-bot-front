import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import { columnsListUsers } from "./userColumns";
import CustomPagination from "@/components/core/Pagination";
import SkeletonAnimation from "@/components/skeleton";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getUsers, handlePaginationUsers } from "@/globalState/atoms/user";
import { IUser } from "@/types/stateSchema/user";
import { verifyScreenSize } from "@/components/core/Sidebar";
import { screenSizeState } from "@/globalState/atoms";
import { useNavigate } from "react-router";
import ShowPermissionUser from "../showPermissionUser";
import DialogCustom from "@/components/core/DialogCustom";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import DeletePermissions from "../deletePermissions";
import AddPermissions from "../addPermissions";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";
import { CustomButton } from "@/components/core/Button";

function UsersAssignments() {
  const { data, metaData, message } = useRecoilValue(
    getUsers
  ) as unknown as IResRecoil<IUser[]>;
  const screenSize = useRecoilValue(screenSizeState);
  const [pagination, setPagination] = useRecoilState(handlePaginationUsers);
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div>
      <div className="px-5">
        {message && (
          <AlertMessage
            severity={severityAlert.INFO}
            message={{
              title: "Information",
              description: message,
            }}
            openAlert={alert.open}
            closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
            width={98}
          />
        )}
        {verifyScreenSize(screenSize, 700) ? (
          <>
            <MobileScreenPermissions dataUsers={data} />
          </>
        ) : (
          <>
            <DesktopScreenUsers dataUsers={data} />
          </>
        )}
        <CustomPagination
          disabled={metaData?.pagination?.page === 1 ? true : false}
          dataPagination={metaData?.pagination || dataPagination.pagination}
          nextPage={() => {
            setPagination({ ...pagination, page: pagination.page + 1 });
          }}
          previousPage={() =>
            setPagination({ ...pagination, page: pagination.page - 1 })
          }
        />
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
  const refreshUsers = useRecoilRefresher_UNSTABLE(getUsers);

  return (
    <div>
      <DataTable
        searchField="full_name"
        columns={columnsListUsers}
        data={dataUsers}
      >
        <CustomButton
          onClick={() => refreshUsers()}
          label="Actualiser"
          className="rounded-md "
          // statusLoading={true}
        />
      </DataTable>
    </div>
  );
}

export function HandlePermission({ item }: { item: any }) {
  const navigate = useNavigate();
  const [tabId, setTabId] = useState<number>(0);
  const [closeDiaolg, setCloseDialog] = useState(0);

  return (
    <DialogCustom
      openDilog={closeDiaolg}
      mainBtnOptions={{
        btnText: "Gerer",
        useBtn: true,
        classNameBtn: "max-w-[80px]",
      }}
      mainTitle="Gestion des permissions"
      width="sm"
    >
      <TabMenuCustom
        dataTabs={["Permissions", "Supprimer", "Affectater"]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className="my-2">
        {tabId === 0 && (
          <div className="my-2  mx-2 px-2 border rounded-md">
            {item.metaData.permissions.map((item_: any, key: number) => (
              <div key={key}>
                <h4 className="bordeer border-b pb-1">
                  <span
                    className="text-main-color"
                    onClick={() => {
                      navigate(`/users/profile/${item.id}`);
                    }}
                  >
                    {item_?.organisation?.name}{" "}
                  </span>
                </h4>
                <ShowPermissionUser dataPermissions={item_.allpermission} />
              </div>
            ))}
          </div>
        )}
        {tabId === 1 && (
          <DeletePermissions
            currentUser={item}
            setCloseDialog={setCloseDialog}
          />
        )}
        {tabId === 2 && (
          <AddPermissions currentUser={item} setCloseDialog={setCloseDialog} />
        )}
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
