import React, { Suspense, useEffect, useState } from "react";
import SkeletonAnimation from "@/components/skeleton";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListTypeOrganizations from "./typeOrganisation";
import ListOrganizations from "./organisation";
import ListIndications from "./indication";

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
        {tabId === 0 && <ListOrganizations />}
        {tabId === 1 && <ListTypeOrganizations />}
        {tabId === 2 && <ListIndications />}
      </div>
    </div>
  );
}
export default ScreenManagerOrg;
