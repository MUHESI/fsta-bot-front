import React from "react";
import { IAlert } from "../../types/stateSchema/alert";

export default function DetailAlert({ alert }: { alert: IAlert }) {
  return (
    <div>
      <MoreDetailAlert label="Nom du point focal" content={alert.nameResp} />
      <MoreDetailAlert
        label="Contact du point focal"
        content={alert.phoneResp}
      />
      <MoreDetailAlert label="Mesures prises" content={alert.mesure} />
    </div>
  );
}
function MoreDetailAlert({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div>
      <div className=" text-sm m-2 border-b">
        <label className="text-slate-400">{label} </label>
        <p className="my-2 pl-2 text-slate-600">{content} </p>
      </div>
    </div>
  );
}
