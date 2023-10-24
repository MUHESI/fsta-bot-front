import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataAlerts, dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListAlerts } from "./columns";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { IAlert } from "@/types/stateSchema/alert";
import { getAllAlerts, screenSizeState } from "@/globalState/atoms";
import SkeletonAnimation from "@/components/skeleton";
import { verifyScreenSize } from "@/components/core/Sidebar";
import Actions from "./Actions";
import DetailAlert from "@/components/alert/moreDetail";
import SwipeableCustom, {
  allOptionsDrawer,
} from "@/components/core/SwipeableDrawerCustom";

function Alerts() {
  const navigate = useNavigate();
  const allAlert = useRecoilValue(getAllAlerts) as unknown as IAlert[];
  const screenSize = useRecoilValue(screenSizeState);

  return (
    <div>
      <div className="p-5">
        {verifyScreenSize(screenSize, 700) ? (
          <>
            <MobileScreenAlerts dataAlerts={allAlert} />
          </>
        ) : (
          <>
            <DesktopScreenAlerts allAlert={allAlert} />
          </>
        )}
        {/* */}
      </div>
    </div>
  );
}

function MobileScreenAlerts({ dataAlerts }: { dataAlerts: any[] }) {
  const navigate = useNavigate();
  const [closeDrawer, setCloseDrawer] = useState(0);

  const haundleCloseDrawer = () => setCloseDrawer(Math.random());

  return (
    <div>
      {dataAlerts.map((item: any, key: number) => (
        <div
          key={key}
          className="my-2 border shadow hover:shadow-md rounded p-1 py-2  "
        >
          <div className="flex justify-between items-center ">
            <div>
              <div className="">
                <h4 className="text-sm text-gray-400">Point Focal</h4>
                <div className="text-sm p-0 m-0 pl-2 font-bold ">
                  {`${item.name_point_focal} | ${item.phone}`}
                </div>
              </div>
              <div className="">
                <h4 className="text-sm text-gray-400">Lieu</h4>
                <div className="text-sm p-0 m-0 pl-2 font-bold ">
                  {item.dataaire.name}
                </div>
              </div>
              <div className="">
                <h4 className="text-sm text-gray-400">Date d'alert</h4>
                <div className="text-sm p-0 m-0 pl-2 font-bold ">
                  {item.datealert}
                </div>
              </div>
              <div className="">
                <h4 className="text-sm text-gray-400">Date de notification</h4>
                <div className="text-sm p-0 m-0 pl-2 font-bold ">
                  {item.date_notification}
                </div>
              </div>
              <div className="">
                <h4 className="text-sm text-gray-400">Nombre des touches</h4>
                <div className="text-sm pl-2 font-bold">
                  {`${item.nbr_touche}`}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm">
                <Actions gap={item} />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-sm">
            <SwipeableCustom
              textBtn={"Voir plus"}
              classNameMainTitle={"bg-main-color border p-1 rounded-md"}
              mainTitle={" Detail de l'alert courant"}
              randomCloseDrawer={0}
              options={allOptionsDrawer}
              closeDrawer={haundleCloseDrawer}
            >
              <DetailAlert alert={item} />
            </SwipeableCustom>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopScreenAlerts({ allAlert }: { allAlert: any }) {
  return (
    <div>
      <DataTable
        searchField="description"
        columns={columnsListAlerts}
        data={allAlert}
      >
        <Button variant="outline" className="ml-auto rounded-full">
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

function ListAlerts() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des alerts"} />
      </div>
      <div data-testid="list des alerts">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Alerts />
        </Suspense>
      </div>
    </div>
  );
}

export default ListAlerts;
