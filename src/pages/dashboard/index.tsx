import React from "react";
import { Grid } from "@mui/material";

import RangeDateComponent from "@/components/shared/RangeDateComponent";
import { MdNotificationsActive } from "react-icons/md";
import { GiCaveman, GiStrongMan } from "react-icons/gi";
import { CardNumberItem } from "@/components/dashboard";
import { BsFillCircleFill } from "react-icons/bs";
import ChartComponent from "@/components/chrats/Line";
import { BarChart } from "@/components/chrats/Bart";
import { PieChart } from "@/components/chrats/PieChart";
import { MainTitle, SelectField } from "./components";
import { SelectCommon } from "@/components/core/select";
import ListGapsByDPS from "./ListGaps";
import { ArcMapView } from "@/components/arcGis-components/arcMapView";

const dataYear = [
  { id: 1, year: 2000 },
  { id: 1, year: 2001 },
  { id: 1, year: 2002 },
  { id: 1, year: 2003 },
  { id: 1, year: 2004 },
  { id: 1, year: 2005 },
  { id: 1, year: 2022 },
  { id: 1, year: 2023 },
];

const dataDPS = [
  {
    id: 1,
    DPS: "SUD-KIVU",
  },
  {
    id: 1,
    DPS: "NORD-KIVU",
  },
  {
    id: 1,
    DPS: "ITURI",
  },
  {
    id: 1,
    DPS: "KATANGA",
  },
];
const dataMaladies = [
  {
    id: 1,
    label: "CHOLERA",
  },
  {
    id: 1,
    label: "ROUGEOLE",
  },
  {
    id: 1,
    label: "PALUDISME",
  },
  {
    id: 1,
    label: "AUTRES",
  },
];

function Dashboard() {
  const commonClassMain = "border my-2 p-1 rounded";

  return (
    <div className="p-1 bg-[#f3f4f6]">
      <main className=" my-4 p-2  bg-white rounded shadow">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <div className="">
              {/* --FILTER-- */}
              <section className={`${commonClassMain} h-[210px]`}>
                <div className="d-flex px-1 m-0">
                  <MainTitle title="Filtrer" />
                  {/* <div className="  text-xs gap-4 flex flex-wrap">
                  <div className="flex items-center gap-2">
                    <BsFillCircleFill className="text-main-color text-xs" />
                    <span className="text-xs">Non repondus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsFillCircleFill className="text-main-color text-xs" />
                    <span className="text-xs">Gaps repondus</span>
                  </div>
                </div> */}
                  <div>
                    <div className="flex gap-2">
                      <SelectField
                        data={dataYear}
                        label={"Choisir l'année epid."}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="Année epidemiologie"
                        keyObject="year"
                        value={"..."}
                      />
                      <SelectField
                        data={dataYear}
                        label={"Sem. epid."}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="La semaine epidemiologie"
                        keyObject="year"
                        value={"..."}
                      />
                    </div>
                    <div className="flex gap-2">
                      <SelectField
                        data={dataDPS}
                        label={"DPS"}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="Choisir le DPS"
                        keyObject="DPS"
                        value={"..."}
                      />
                      <SelectField
                        data={dataMaladies}
                        label={"Maladie"}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="Choisir la maladie"
                        keyObject="label"
                        value={"..."}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className={commonClassMain}>
                <MainTitle title="Total PIN" />
                <BarChart />
              </section>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <section>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Alerts signalés"
                    numberItems="4.56"
                    link="/gaps"
                  >
                    <MdNotificationsActive />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Personnes retorunées"
                    numberItems="2.56"
                    link="/gaps"
                  >
                    <GiStrongMan />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Personnes deplacées"
                    numberItems="1.26"
                    link="/gaps"
                  >
                    <GiCaveman />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Alerts signalés"
                    numberItems="4.56"
                    link="/gaps"
                  >
                    <MdNotificationsActive />
                  </CardNumberItem>
                </Grid>
              </Grid>
              <section className={commonClassMain}>
                <ChartComponent />
              </section>
            </section>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <section className={commonClassMain}>
              <MainTitle title="Status gaps" />
              <PieChart />
            </section>

            <section className={commonClassMain}>
              <MainTitle title="Total PIN" />
              <BarChart bgColor="true" />
            </section>
          </Grid>
        </Grid>
      </main>
      <main className=" my-2  bg-white rounded shadow">
        <ListGapsByDPS />
      </main>
      <main className=" my-4 p-2  bg-white rounded shadow">
        <ArcMapView />
      </main>
    </div>
  );
}

export default Dashboard;
