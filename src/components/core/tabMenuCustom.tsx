import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface IProps {
  dataTabs: string[];
  handleTabId: (id: number) => void;
  defeaultTabId?: number;
}
function TabMenuCustom({ defeaultTabId, dataTabs, handleTabId }: IProps) {
  const [tabId, setTabId] = useState(defeaultTabId || 0);
  const keepId = (id: number) => {
    setTabId(id);
    return handleTabId(id);
  };

  const { screenId } = useParams();
  // HANDLE TABS

  useEffect(() => {
    if (screenId && Number(screenId)) {
      setTabId(Number(screenId));
      handleTabId(Number(screenId));
    }
  }, []);

  return (
    <div className="content-tabs flex gap-[5px] border-b border-b-main-color mx-[10px] my-[3px] ">
      {dataTabs.map((item: string, key: number) => (
        <div
          key={key}
          className={`text-sm cursor-pointer min-w-[50px] text-[#aab0b9] p-[5px] mb-[10px] border-b border-transparent  transition-all ease-in-out duration-300 font-bold ${
            tabId === key ? "bg-[#e5e7eb] rounded" : "bg-transparent"
          }`}
          onClick={() => keepId(key)}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

export default TabMenuCustom;
