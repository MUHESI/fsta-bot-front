import React, { Suspense, useEffect, useState } from "react";
import SkeletonAnimation from "@/components/skeleton";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListTypeOrganizations from "./typeOrganisation";
import ListOrganizations from "./organisation";
import ListIndicators from "./indicators";

function ScreenManagerOrg() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);

  return (
    <div className="pt-4">
      <TabMenuCustom
        dataTabs={["Organisations", "Type Organisation", "Indicateurs"]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className="">
        {tabId === 0 && <ListOrganizations />}
        {tabId === 1 && <ListTypeOrganizations />}
        {tabId === 2 && <ListIndicators />}
      </div>
    </div>
  );
}
export default ScreenManagerOrg;
