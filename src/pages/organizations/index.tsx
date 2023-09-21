import React, { Suspense, useEffect, useState } from "react";
import SkeletonAnimation from "@/components/skeleton";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListTypeOrganizations from "./typeOrganisation";
import ListOrganizations from "./organisation";

function ScreenManagerOrg() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);

  return (
    <div className="pt-4">
      <TabMenuCustom
        dataTabs={["Organisations", "Type Organisation", "Indications"]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className=" m-4 ">
        {tabId === 0 && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <ListOrganizations />
          </Suspense>
        )}
        {tabId === 1 && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <ListTypeOrganizations />
          </Suspense>
        )}
        {tabId === 2 && <>Im 023 </>}
      </div>
    </div>
  );
}
export default ScreenManagerOrg;
