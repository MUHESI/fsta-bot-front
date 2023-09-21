import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import SkeletonAnimation from "@/components/skeleton";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListOrganizations from "./typeOrganisation";

function ScreenManagerOrg() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);

  return (
    <div className="pt-4">
      {/* <div className="p-1 text-main-color-dark">
        <LastHeading title={"Organisations"} />
      </div> */}

      <>
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
          {tabId === 1 && <>Im 022 </>}
          {tabId === 2 && <>Im 023 </>}
        </div>
      </>
    </div>
  );
}
export default ScreenManagerOrg;
