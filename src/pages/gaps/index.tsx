import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListGaps } from "./columns";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  currentProvinceIDState,
  getAllGaps,
  getProvincesState,
  screenSizeState,
} from "@/globalState/atoms";
import { GAP_ACTIONS_STATUS, IGap } from "@/types/stateSchema/gap";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/components/core/Button";
import { IProvince } from "@/types/stateSchema/province";
import { SelectCommon } from "@/components/core/select";
import { verifyScreenSize } from "@/components/core/Sidebar";
import ActionsGap from "./Actions";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";

function Gaps() {
  const resGaps = useRecoilValue(getAllGaps) as unknown as IResRecoil<IGap[]>;
  const screenSize = useRecoilValue(screenSizeState);
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div className="px-5">
      {(resGaps.message || resProvinces.message) && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: `${resGaps.keyResource}@@${resGaps.message} ${resGaps.error}
              ${resProvinces.keyResource}@@${resProvinces.message} ${resProvinces.error}
              `,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )}
      {verifyScreenSize(screenSize, 700) ? (
        <>
          <SelectCommon
            data={resProvinces.data}
            label=""
            keyObject="name"
            onChange={setCurrentProvinceID}
            value={"..."}
            className="border border-main-color"
          />
          <MobileScreenGaps dataGaps={resGaps.data || []} />
        </>
      ) : (
        <>
          <DesktopScreenGaps dataGaps={resGaps.data || []} />
        </>
      )}
    </div>
  );
}

function MobileScreenGaps({ dataGaps }: { dataGaps: any[] }) {
  const navigate = useNavigate();

  return (
    <div>
      {dataGaps.map((item: any, key: number) => (
        <div
          key={key}
          className="my-2 border shadow hover:shadow-md rounded  flex justify-between items-center p-1 py-2"
        >
          <div
            className="cursor-pointer"
            title="voir le detail"
            onClick={() => navigate(`/gaps/detail/${item.id}`)}
          >
            <div className="">
              <h4 className="text-sm text-gray-400">Titre du gap</h4>
              <div className="text-sm p-0 m-0 pl-2 font-bold ">
                {item.title}
              </div>
            </div>
            <div className="">
              <h4 className="text-sm text-gray-400">Localisation</h4>
              <div className="text-sm pl-2 font-bold">
                {`${item.dataprovince.name} | ${item.dataaire.name}`}
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm pl-2">
              <ActionsGap gap={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesktopScreenGaps({ dataGaps }: { dataGaps: any[] }) {
  const navigate = useNavigate();

  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const refreshGaps = useRecoilRefresher_UNSTABLE(getAllGaps);

  return (
    <div>
      <DataTable
        searchField="titleGap"
        columns={columnsListGaps}
        data={dataGaps || []}
      >
        <div className="flex flex-wrap justify-between gap-2">
          <SelectCommon
            data={resProvinces.data}
            // required={true}
            label=""
            keyObject="name"
            onChange={setCurrentProvinceID}
            value={"..."}
            className={"border-main-color text-main-color"}
          />
          <CustomButton
            onClick={() => refreshGaps()}
            label="Actualiser"
            className="rounded-md"
            // statusLoading={true}
          />
          <CustomButton
            onClick={() =>
              navigate(`/gaps/actions/${GAP_ACTIONS_STATUS.CREATE_GAP}/null`)
            }
            label="Créer un nouveau"
            className="rounded-md"
            // statusLoading={true}
          />
        </div>
      </DataTable>
      <CustomPagination
        dataPagination={dataPagination.pagination}
        nextPage={() => console.log("next")}
        previousPage={() => console.log("next")}
      />
    </div>
  );
}

function ListGaps() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des gaps"} />
      </div>
      <div data-testid="list des gaps">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Gaps />
        </Suspense>
      </div>
    </div>
  );
}

export default ListGaps;
