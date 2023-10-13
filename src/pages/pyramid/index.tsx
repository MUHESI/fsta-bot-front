import React, { useState } from "react";
import TabMenuCustom from "@/components/core/tabMenuCustom";
import ListProvinces from "../provinces";
import ListTerritories from "../territories";
import ListHealthAreas from "../healthAreas";
import Pyramid from "./pyramid";
import ListZoneSantes from "../zoneSante";

function ScreenManagerOrg() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);

  return (
    <div className="pt-1">
      <TabMenuCustom
        dataTabs={[
          "Structures de santé",
          "Provinces",
          "Territoires",
          "Zone de santé",
          "Aires de sante",
        ]}
        handleTabId={setTabId}
        defeaultTabId={tabId}
      />
      <div className=" ">
        {tabId === 0 && <Pyramid />}
        {tabId === 1 && <ListProvinces />}
        {tabId === 2 && <ListTerritories />}
        {tabId === 3 && <ListZoneSantes />}
        {tabId === 4 && <ListHealthAreas />}
      </div>
    </div>
  );
}
export default ScreenManagerOrg;
