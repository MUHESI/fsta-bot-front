import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import SkeletonAnimation from "@/components/skeleton";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListOrganizations from "./organisation";

function ScreenManagerOrg() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);

  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Organisations"} />
        <>
          <TabMenuCustom
            dataTabs={["Organisations", "Type Organisation", "Indications"]}
            handleTabId={setTabId}
            defeaultTabId={tabId}
          />
          <div>
            {tabId === 0 && <>Im 01 </>}
            {tabId === 1 && <>Im 022 </>}
            {tabId === 2 && <>Im 023 </>}
          </div>
        </>
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <ListOrganizations />
      </Suspense>
    </div>
  );
}
export default ScreenManagerOrg;
