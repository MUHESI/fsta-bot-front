import React, { Suspense, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { MdNotificationsActive } from "react-icons/md";
import { GiCaveman, GiStrongMan } from "react-icons/gi";
import { CardNumberItem } from "@/components/dashboard";
import ChartComponent from "@/components/chrats/Line";
import { BarChart } from "@/components/chrats/Bart";
import { MainTitle, SelectField } from "./components";
import ListGapsByDPS from "./ListGaps";
import {
  getEpidemioLogicWeek,
  getYearsInInterval,
} from "@/constants/constants";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dashobard_getAllGaps,
  getMaladies,
  getProvincesState,
} from "@/globalState/atoms";
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
import Filter from "./Filter";
import {
  IDataFilter,
  IPopulation,
  appyFilterDashboard,
  filterDashboardState,
  getSumPopulation,
} from "@/globalState/atoms/dashboard";
import { TabMenuDashboard } from "@/components/core/tabMenuCustom";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";

function Home() {
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const [formFilter, setFormFilter] = useRecoilState(filterDashboardState);
  const [dataResFilter, setDataResFilter] = useState<IDataFilter>();
  const resMaladies = useRecoilValue(getMaladies) as unknown as IResRecoil<
    IMaladie[]
  >;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });
  const [popOfData, setPopOfData] = useState<IPopulation>();
  const commonClassMain = "border my-2 p-1 rounded";
  const dashboard_resGaps = useRecoilValue(
    dashobard_getAllGaps
  ) as unknown as IResRecoil<{
    reference: any[];
    refValidated: any[];
    refUnValidated: any[];
    refAnswered: any[];
  }>;

  useEffect(() => {
    if (dashboard_resGaps.data) {
      const res = appyFilterDashboard({
        resDBLocal: dashboard_resGaps.data,
        resFilter: formFilter,
      });
      setDataResFilter(res);
    }
  }, [dashboard_resGaps.data, formFilter]);

  const [tabId, setTabId] = useState<number>(0);

  useEffect(() => {
    switch (tabId) {
      case 0:
        const pop = getSumPopulation(
          dataResFilter?.dataGaps.dataFiltered.unValidated || []
        );
        setPopOfData(pop);
        break;
      case 1:
        const pop_ = getSumPopulation(
          dataResFilter?.dataGaps.dataFiltered.validated || []
        );
        setPopOfData(pop_);
        break;
      case 2:
        const pop__ = getSumPopulation(
          dataResFilter?.dataGaps.dataFiltered.answered || []
        );
        setPopOfData(pop__);
        break;
      default:
        break;
    }
  }, [dataResFilter, tabId]);
  const handleStatus = (status_: number) => {
    setFormFilter(
      HandleFormObject.handleSecondLevel(
        formFilter,
        {
          fKey: "statusItem",
          lKey: "value",
        },
        status_
      )
    );
  };

  return (
    <div className="p-1 bg-[#f3f4f6]">
      {resMaladies.message && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: `${resMaladies.keyResource}@@${resMaladies.message}`,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )}
      <main className=" my-4 p-2  bg-white rounded shadow">
        {/* <TabMenuDashboard
          dataTabs={["REMONTES", "INVESTIGUES", "REPONDUS"]}
          handleTabId={setTabId}
          defeaultTabId={tabId}
        /> */}
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

                  <Suspense fallback={<SkeletonAnimation className="px-5" />}>
                    <Filter />
                  </Suspense>
                </div>
              </section>
              <section className={commonClassMain}>
                <div className="">
                  <MainTitle title="Total PIN" />
                  <SelectField
                    data={[
                      { id: 0, value: "NON VALIDEES" },
                      { id: 1, value: "VALIDEES" },
                      { id: 2, value: "REPONDUS" },
                    ]}
                    onChange={(value: string) => {
                      setTabId(Number(value));
                      console.clear();
                      console.log("formFilter", formFilter);
                    }}
                    label={"Choisir status "}
                    tooltipTitle=" NON VALIDES ? VALIDES ? REPONDU ?"
                    keyObject="value"
                    value={"..."}
                  />
                </div>
                {popOfData && (
                  <BarChart
                    dataAxis={{
                      pin: popOfData.pin,
                      pop_deplace: popOfData.pop_deplace,
                      pop_eloigne: popOfData.pop_eloigne,
                      pop_retourne: popOfData.pop_retourne,
                      // pop_site: dataResFilter?.dataGaps.sumPopulation.pop_site,
                    }}
                  />
                )}
              </section>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <section>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Alertes signalés"
                    numberItems={
                      dataResFilter?.dataAlerts?.lenghtAlertsByStatus
                        .noValidated || ""
                    }
                    link="/gaps"
                  >
                    <MdNotificationsActive />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Alertes investigués"
                    // numberItems="2.56"
                    numberItems={
                      dataResFilter?.dataAlerts?.lenghtAlertsByStatus
                        .validated || ""
                    }
                    link="/gaps"
                  >
                    <GiStrongMan />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Alertes répondus"
                    numberItems={
                      dataResFilter?.dataAlerts?.lenghtAlertsByStatus
                        .answered || ""
                    }
                    link="/gaps"
                  >
                    <GiStrongMan />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Gaps remontés"
                    numberItems={
                      dataResFilter?.dataGaps?.lenghtGapsByStatus.noValidated ||
                      ""
                    }
                    link="/gaps"
                  >
                    <GiCaveman />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Gaps investigués"
                    numberItems={
                      dataResFilter?.dataGaps?.lenghtGapsByStatus.validated ||
                      ""
                    }
                    link="/gaps"
                  >
                    <GiCaveman />
                  </CardNumberItem>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <CardNumberItem
                    tag="Gaps répondues"
                    numberItems={
                      dataResFilter?.dataGaps?.lenghtGapsByStatus.answered || ""
                    }
                    link="/gaps"
                  >
                    <GiCaveman />
                  </CardNumberItem>
                </Grid>
              </Grid>
              <section className={commonClassMain}>
                {dataResFilter && (
                  <ChartComponent
                    dataLine={[
                      {
                        dataAxis:
                          dataResFilter.dataGaps.lineData.dataAxisNoValidated,
                        legend: "Remontés",
                      },
                      {
                        dataAxis:
                          dataResFilter.dataGaps.lineData.dataAxisValidated,
                        legend: "Validés",
                      },
                      {
                        dataAxis:
                          dataResFilter.dataGaps.lineData.dataAxisAnswered,
                        legend: "Repondus",
                      },
                    ]}
                  />
                )}
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
              {/* <BarChart bgColor="true" /> */}
            </section>
          </Grid>
        </Grid>
      </main>
      <main className=" my-2  bg-white rounded shadow">
        <ListGapsByDPS />
      </main>
      {/* <main className=" my-4 p-2  bg-white rounded shadow">
        <ArcMapView />
      </main> */}
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

// // TODO Move this later
// export interface IProps {
//   dataTabs: string[];
//   handleTabId: (id: number) => void;
//   defeaultTabId?: number;
// }
