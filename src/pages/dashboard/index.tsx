import React, { Suspense, useState } from "react";
import { Grid } from "@mui/material";
import { MdNotificationsActive } from "react-icons/md";
import { GiCaveman, GiStrongMan } from "react-icons/gi";
import { CardNumberItem } from "@/components/dashboard";
import ChartComponent from "@/components/chrats/Line";
import { BarChart } from "@/components/chrats/Bart";
import { MainTitle, SelectField } from "./components";
import ListGapsByDPS from "./ListGaps";
import { ArcMapView } from "@/components/arcGis-components/arcMapView";
import {
  getEpidemioLogicWeek,
  getYearsInInterval,
} from "@/constants/constants";
import { useRecoilValue } from "recoil";
import { getMaladies, getProvincesState } from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import SkeletonAnimation from "@/components/skeleton";
import { IMaladie } from "@/types/stateSchema/maladie";
import RangerSlider, {
  LegendRangerSlider,
  RANGE_CLASS,
} from "@/components/core/RangerSlider";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";

function Home() {
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const resMaladies = useRecoilValue(getMaladies) as unknown as IResRecoil<
    IMaladie[]
  >;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });
  const commonClassMain = "border my-2 p-1 rounded";

  return (
    <div className="p-1 bg-[#f3f4f6]">
      {resMaladies.message && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: resMaladies.message,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )}
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
                        data={getYearsInInterval(2022, 2030)}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        label={"Choisir l'année epid."}
                        tooltipTitle="Année epidemiologie"
                        keyObject="value"
                        value={"..."}
                      />
                      <SelectField
                        data={getEpidemioLogicWeek()}
                        label={"Sem. epid."}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="La semaine epidemiologie"
                        keyObject="value"
                        value={"..."}
                      />
                    </div>
                    <div className="flex gap-2">
                      <SelectField
                        data={resProvinces.data}
                        defaultValue={{ label: "ALL", value: "ALL" }}
                        label={"DPS"}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="Choisir le DPS"
                        keyObject="name"
                        value={"..."}
                      />
                      <SelectField
                        data={resMaladies.data}
                        defaultValue={{ label: "ALL", value: "ALL" }}
                        onChange={(e: any) => {
                          console.clear();
                          console.log("e", e);
                        }}
                        tooltipTitle="Choisir la maladie"
                        keyObject="name"
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
              <LegendRangerSlider />
              {/* <PieChart /> */}
              {resProvinces.data?.map((item: IProvince, key: number) => (
                <div key={key}>
                  <RangerSlider
                    data={{
                      label: item.name,
                      lNumber: 677,
                      value: `86`,
                    }}
                    typeRanger={RANGE_CLASS.brightOrange}
                  />
                </div>
              ))}
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

function Dashboard() {
  return (
    <div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Home />
      </Suspense>
    </div>
  );
}
export default Dashboard;
