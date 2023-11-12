import React from "react";
import { getMaladies, getProvincesState } from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import {
  getEpidemioLogicWeek,
  getYearsInInterval,
} from "@/constants/constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { IResRecoil } from "@/types/commonTypes";
import { SelectField } from "./components";
import { IMaladie } from "@/types/stateSchema/maladie";
import { filterDashboardState } from "@/globalState/atoms/dashboard";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";

function Filter() {
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;
  const resMaladies = useRecoilValue(getMaladies) as unknown as IResRecoil<
    IMaladie[]
  >;
  const [formFilter, setFormFilter] = useRecoilState(filterDashboardState);

  return (
    <div>
      <div className="flex gap-2">
        <SelectField
          data={resMaladies.data}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "maladieId",
                  lKey: "value",
                },
                value
              )
            );
          }}
          includeALLItems={{
            // label: "Toutes les maladies",
            label: "ALL",
            value: "ALL",
          }}
          label="Maladie"
          tooltipTitle="Fitrer par maladie"
          keyObject="name"
          value={"..."}
        />
        <SelectField
          data={getYearsInInterval(2022, 2030)}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "epidemYear",
                  lKey: "value",
                },
                value
              )
            );
          }}
          includeALLItems={{
            label: "ALL",
            value: "ALL",
          }}
          label={"Année epid."}
          tooltipTitle="Filtrer par année epidemiologie"
          keyObject="value"
          value={"..."}
        />
      </div>
      <div className="flex gap-2">
        <SelectField
          data={getEpidemioLogicWeek()}
          label={"Semaine. epid."}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "epidemWeek",
                  lKey: "value",
                },
                value
              )
            );
          }}
          includeALLItems={{
            // label: "Toutes les maladies",
            label: "ALL",
            value: "ALL",
          }}
          tooltipTitle="Filtrer par la semaine epidemiologie"
          keyObject="value"
          value={"..."}
        />
        <SelectField
          data={resProvinces.data}
          label={"Province"}
          keyObject="name"
          includeALLItems={{
            // label: "Toutes les DPS",
            label: "ALL",
            value: "ALL",
          }}
          value={"..."}
          tooltipTitle="Filtrer par province"
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "provinceId",
                  lKey: "value",
                },
                value
              )
            );
          }}
        />
      </div>
      <div className="flex gap-2">
        <SelectField
          data={resProvinces.data}
          label={"Territoire"}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "territoryId",
                  lKey: "value",
                },
                value
              )
            );
          }}
          keyObject="name"
          includeALLItems={{
            label: "ALL",
            value: "ALL",
          }}
          value={"..."}
          tooltipTitle="Filtrer par territoire"
        />
        <SelectField
          data={resProvinces.data}
          label={"Zone de santé"}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "zoneSanteId",
                  lKey: "value",
                },
                value
              )
            );
          }}
          keyObject="name"
          includeALLItems={{
            // label: "Toutes les zones",
            label: "ALL",
            value: "ALL",
          }}
          value={"..."}
          tooltipTitle="Filtrer par zone de santé"
        />
      </div>
      <div className="flex gap-2">
        <SelectField
          data={resProvinces.data}
          label={"Aires de santé"}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "airSanteId",
                  lKey: "value",
                },
                value
              )
            );
          }}
          keyObject="name"
          includeALLItems={{
            // label: "Toutes les Aires",
            label: "ALL",
            value: "ALL",
          }}
          value={"..."}
          tooltipTitle="Filtrer par aire de santé"
        />
        <SelectField
          data={resProvinces.data}
          label={"Structure de santé"}
          onChange={(value: string) => {
            setFormFilter(
              HandleFormObject.handleSecondLevel(
                formFilter,
                {
                  fKey: "structureSanteId",
                  lKey: "value",
                },
                value
              )
            );
          }}
          keyObject="name"
          includeALLItems={{
            // label: "Toutes les Zones",
            label: "ALL",
            value: "ALL",
          }}
          value={"..."}
          tooltipTitle="Filtrer par structure de santé"
        />
      </div>
    </div>
  );
}

export default Filter;
