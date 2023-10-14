import React from "react";
import { IAlert } from "../../types/stateSchema/alert";

export default function DetailAlert({ alert }: { alert: IAlert }) {
  return (
    <div>
      <MoreDetailAlert label="Air de Santé" content={alert.dataaire.name} />
      <div className="text-sm m-2 border-b flex justify-between flex-wrap ">
        <div>
          <label className="text-slate-400">Date de création</label>
          <p className="my-2 pl-2 text-slate-600 font-bold">
            {`Le ${alert.datealert} à ${alert.timealert}`}
          </p>
        </div>
        <div>
          <label className="text-slate-400">Date de notification</label>
          <p className="my-2 pl-2 text-slate-600 font-bold">
            {`Le ${alert.date_notification}`}
          </p>
        </div>
        <div>
          <label className="text-slate-400">Date de détection</label>
          <p className="my-2 pl-2 text-slate-600 font-bold">
            {`Le ${alert.date_detection} à ${alert.time_detection}`}
          </p>
        </div>
      </div>
      <div>
        <div className=" text-sm m-2 border-b">
          <label className="text-slate-400">Maladie </label>
          <p className="my-2 pl-2 text-slate-600 font-bold">
            {alert.maladie.name}{" "}
          </p>
          <p className="my-2 pl-2 text-slate-600 font-bold">
            {alert.description || ""}
          </p>
        </div>
      </div>
      <div className="text-sm m-2 border-b flex justify-between flex-wrap ">
        <div>
          <label className="text-slate-400">Pers. touchées</label>
          <p className="my-2 pl-2 text-slate-600 font-bold">{`${alert.nbr_touche}`}</p>
        </div>
        <ShoItemOfValidation
          label={"Pers. decedées"}
          itemOfValidation={alert.dece_disponible}
          value={alert.nbr_dece}
        />
        <ShoItemOfValidation
          label={"Animaux malades"}
          itemOfValidation={alert.animal_malade}
          value={alert.nb_animal_malade}
        />
        <ShoItemOfValidation
          label={"Animaux morts"}
          itemOfValidation={alert.animal_mort}
          value={alert.nb_animal_mort}
        />
      </div>
      <MoreDetailAlert
        label="Noms et contact du point focal"
        content={`${alert.name_point_focal} | ${alert.phone} `}
      />
      <MoreDetailAlert
        label="L’événement est-il en cours au moment de la présente notification ? "
        content={alert.evenement === "non" ? "NON" : "OUI"}
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
        <p className="my-2 pl-2 text-slate-600 font-bold">{content} </p>
      </div>
    </div>
  );
}

function ShoItemOfValidation({
  label,
  itemOfValidation,
  value,
}: {
  label: string;
  itemOfValidation: string;
  value: string;
}) {
  return (
    <div>
      <label className="text-slate-400">{label}</label>
      <p
        className={`my-2 pl-2 text-slate-600 ${
          itemOfValidation === "non" && "bg-[#e5e7eb]"
        }  font-bold`}
      >{`${itemOfValidation === "non" ? "NON" : value}`}</p>
    </div>
  );
}
