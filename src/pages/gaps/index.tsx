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
} from "@/globalState/atoms";
import { GAP_ACTIONS_STATUS, IGap } from "@/types/stateSchema/gap";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/components/core/Button";
import { IProvince } from "@/types/stateSchema/province";
import { SelectCommon } from "@/components/core/select";

function Gaps() {
  const navigate = useNavigate();
  const allGaps = useRecoilValue(getAllGaps) as unknown as IGap[];

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);

  return (
    <div className="p-5">
      <DataTable
        searchField="titleGap"
        columns={columnsListGaps}
        data={allGaps || []}
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
