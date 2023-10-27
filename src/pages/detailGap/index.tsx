import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import SkeletonAnimation from "@/components/skeleton";
import CustomAccordion from "../../components/core/CustomAccordion";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { getInfoGap, userAuthenticatedState } from "@/globalState/atoms";
import { useParams } from "react-router";
import ActionsGap from "../gaps/Actions";

function Gap() {
  // const user = useRecoilValue(userAuthenticatedState);
  const { idGap } = useParams();
  const commonClass = "border shadow rounded-lg p-2 my-5";
  const commonClassSection = `${commonClass} `;

  // DATA
  const user = useRecoilValue(userAuthenticatedState);
  const detailGap = useRecoilValue(
    getInfoGap({ idGap: idGap, token: user.token })
  ) as unknown as any;

  return (
    <div className="p-4">
      <div
        className={`${commonClassSection} flex flex-wrap justify-between sm:items-center   flex-col sm:flex-row`}
      >
        <div>
          <span className="text-sm text-gray-400">Titre du gap</span>
          <div className="text-sm  font-bold px-4 flex items-center gap-2">
            <span> {`${detailGap?.title} `}</span>
            <span className="p-1 border rounded-md bg-gray-200 ">CREATED </span>
          </div>
        </div>
        <div className=" flex justify-end">
          <ActionsGap gap={detailGap} />
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================ADRESSE===================== */}
          <CustomAccordion
            mainTitle="Localisation"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-auto px-2">
                <div>
                  <div className="text-sm flex flex-col">
                    <label>Povince</label>
                    <strong> {detailGap.dataprovince.name} </strong>
                  </div>
                  <div className="text-sm flex flex-col">
                    <label>Territire</label>
                    <strong> {detailGap.dataterritoir.name} </strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm flex flex-col">
                    <label>Zone de santé</label>
                    <strong> {detailGap.datazone.name} </strong>
                  </div>
                  <div className="text-sm flex flex-col">
                    <label>Aire de santé</label>
                    <strong> {detailGap.dataaire.name} </strong>
                  </div>
                </div>
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================INFO POPULATION===================== */}
          <CustomAccordion
            mainTitle="Info sur la population"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 flex-wrap justify-between">
                <div className="">
                  <div className="text-sm">
                    <label>Pop. de l'aire</label>
                    <strong> {detailGap?.population} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Pop. déplacée </label>
                    <strong> {detailGap?.pop_deplace} </strong>
                  </div>
                </div>
                <div className="">
                  <div className="text-sm">
                    <label>Pop. du site </label>
                    <strong> {detailGap?.pop_site} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Pop. retournée</label>
                    <strong> {detailGap?.pop_retourne} </strong>
                  </div>
                </div>
                {/* ------ */}
              </main>
              <main className="flex gap-2 flex-wrap justify-between  mt-2 sm:mt-0 ">
                <div>
                  <div className="text-sm flex  sm:flex-col">
                    <label>Pop. elognée de la struc. de santé {` `} </label>
                    <strong> {detailGap?.suite1?.pop_eloigne} </strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm">
                    <label>Pop. handicapée </label>
                    <strong> {detailGap?.suite1?.suite2?.pop_handicap} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Pop. vulnerable </label>
                    <strong> {detailGap?.suite1?.pop_vulnerable} </strong>
                  </div>
                </div>
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================INFO MALADIES===================== */}

          <CustomAccordion
            mainTitle="Info sur les maladies"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-wrap px-2">
                {detailGap?.datamaladie?.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1 ">
                      {`${key + 1}.`}
                      <strong> {item?.maladie?.name || ""} </strong>
                    </label>
                    <div className="pl-4">
                      <p>
                        <label>
                          Nb des cas : <strong>{item?.nbrCas} </strong>
                        </label>
                      </p>
                      <p>
                        <label>
                          Nb des décès : <strong>{item?.nbrDeces} </strong>
                        </label>
                      </p>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================INFO MEDICAMENTS===================== */}

          <CustomAccordion
            mainTitle="Info les medicaments"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-wrap px-2">
                {detailGap?.datamedicament?.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1">
                      {`${key + 1}.`}
                      <strong> {item?.medicament?.name} </strong>
                    </label>
                    <div className="pl-2">
                      <p>
                        <label>
                          Etat du top <strong>{item.etat_top} </strong>
                        </label>
                      </p>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================INFO PARTENAIRES===================== */}

          <CustomAccordion
            mainTitle="Info les partenaires présents"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-wrap px-2">
                {detailGap?.datapartenaire?.map((item: any, key: number) => (
                  <div
                    className="flex bg-[#96d4df] justify-between items-center m-1 mx-5 p-2 rounded-md gap-5"
                    key={key}
                  >
                    <div className="text-sm text-white">
                      <label className="font-bold text-xl">
                        {item?.partenaire?.name}
                      </label>
                      <p className="my-2">
                        Paquet:
                        <span className="flex flex-wrap ml-10">
                          {item?.partenaire?.allindicateur?.map(
                            (item_: any, key_: number) => (
                              <span
                                key={key_}
                                className="border border-main-color bg-main-color rounded-md px-1 m-1"
                              >
                                {item_?.paquetappui?.name}
                              </span>
                            )
                          )}
                        </span>
                      </p>
                      <p className="flex gap-4 justify-between">
                        <span>
                          debut: <strong> {item.date_debut} </strong>
                        </span>
                        <span>
                          Fin: <strong> {item.date_fin}</strong>
                        </span>
                      </p>
                      <p className="flex gap-4 justify-between">
                        <span>
                          Contact: <strong> {item.contact_point_facal} </strong>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================INFO PERSONNELS===================== */}

          <CustomAccordion
            mainTitle="Info sur les personnels"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-wrap px-2">
                {detailGap?.datatypepersonnel?.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1 ">
                      {`${key + 1}.`}
                      <strong> {item?.typepersonnel?.name} </strong>
                    </label>
                    <div className="pl-2">
                      <p>
                        <label>
                          Nbr. <strong>{item.nbr}</strong>
                        </label>
                      </p>
                    </div>
                  </div>
                ))}
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================Medicament en rupt===================== */}
          <CustomAccordion
            mainTitle="Medicaments en rupture de stock"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 flex-wrap justify-between  px-2">
                <div>
                  <div className="text-sm flex flex-col mb-1 sm:mb-0 border-b sm:border-none ">
                    <label>Coût des soins de snaté ambulatoire </label>
                    <strong>
                      {detailGap?.suite1?.suite2?.cout_ambulatoire}
                      {"$"}
                    </strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Coût d'accouchement </label>

                    <strong>
                      {detailGap?.suite1?.suite2?.cout_accouchement}
                      {"$"}
                    </strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Coût d'hospitalisation </label>
                    <strong>
                      {detailGap?.suite1?.suite2?.cout_hospitalisation}
                      {"$"}
                    </strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Coût des soins cesarienne </label>
                    <strong>
                      {detailGap?.suite1?.suite2?.cout_cesarienne}
                      {"$"}
                    </strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Couverture en DTC</label>
                    <strong>{detailGap?.suite1?.suite2?.couvertureDtc3}</strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Mortalité de moins de 5 ans </label>
                    <strong>
                      {detailGap?.suite1?.suite2?.mortaliteLessfiveyear}
                    </strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>% l'eau propre </label>
                    <strong>
                      {detailGap?.suite1?.suite2?.pourcentCleanWater}
                    </strong>
                  </div>
                  <div className="text-sm flex flex-col border-b sm:border-none mb-1 sm:mb-0">
                    <label>Malnutrition</label>
                    <strong>{detailGap?.suite1?.suite2?.malnutrition}</strong>
                  </div>
                  <div className="text-sm flex flex-col">
                    <label>Taux d'occuptation</label>
                    <strong>{detailGap?.suite1?.taux_occupation}</strong>
                  </div>
                </div>
              </main>
            </div>
          </CustomAccordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {/* ====================Medicament en rupt===================== */}
          <CustomAccordion
            mainTitle="Autre informations"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-between flex-auto px-2">
                <div>
                  <div className="text-sm flex flex-col">
                    <label>Etat de la structure</label>
                    <strong>{detailGap?.suite1?.etat_infra}</strong>
                  </div>
                  <div className="text-sm flex flex-col">
                    <label>Barrieres </label>
                    <strong>{detailGap?.suite1?.suite2?.barriere}</strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm flex flex-col">
                    <label>Semaine epid </label>
                    <strong>{detailGap?.semaine_epid}</strong>
                  </div>
                  <div className="text-sm flex flex-col">
                    <label>Année epid </label>
                    <strong>{detailGap?.annee_epid}</strong>
                  </div>
                </div>
              </main>
              <main className="px-2">
                <div>
                  <div className="text-sm">
                    <label>Equipéments(volésou dispo...) </label>
                    <p className="border my-2 p-2 rounded">
                      {detailGap?.suite1?.equipement}
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </CustomAccordion>
        </Grid>
      </Grid>
    </div>
  );
}

function DetailGap() {
  const user = useRecoilValue(userAuthenticatedState);

  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"Detail du gap"} />
      </div>
      <div data-testid="list des maladies">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Gap />
        </Suspense>
      </div>
    </div>
  );
}
export default DetailGap;
