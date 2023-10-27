import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListGaps } from "./columns";
import { useRecoilValue, useSetRecoilState } from "recoil";
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

function Gaps() {
  const allGaps = useRecoilValue(getAllGaps) as unknown as IGap[];
  const screenSize = useRecoilValue(screenSizeState);

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);

  return (
    <div className="p-5">
      {verifyScreenSize(screenSize, 700) ? (
        <>
          <SelectCommon
            data={allProvinces}
            label=""
            keyObject="name"
            onChange={setCurrentProvinceID}
            value={"..."}
          />
          <MobileScreenGaps dataGaps={allGaps} />
        </>
      ) : (
        <>
          <DesktopScreenGaps dataGaps={allGaps} />
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

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);

  return (
    <div>
      <DataTable
        searchField="titleGap"
        columns={columnsListGaps}
        data={dataGaps || []}
      >
        <SelectCommon
          data={allProvinces}
          // required={true}
          label=""
          keyObject="name"
          onChange={setCurrentProvinceID}
          value={"..."}
          // type=""
        />
        <CustomButton
          onClick={() => navigate("/organizations/create")}
          label="Actualiser"
          className="rounded-md"
          // statusLoading={true}
        />
        <div className="">
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
