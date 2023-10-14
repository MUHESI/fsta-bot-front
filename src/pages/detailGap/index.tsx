import { LastHeading } from "@/components/core/Heading";
import SkeletonAnimation from "@/components/skeleton";
import React, { Suspense } from "react";
import CustomAccordion from "../../components/core/CustomAccordion";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { getInfoGap, userAuthenticatedState } from "@/globalState/atoms";
import { useParams } from "react-router";
import { DETAIL_GAP } from "@/constants/constants";

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
        className={`${commonClassSection} flex flex-wrap justify-between items-center`}
      >
        <div>
          <span className="text-xl text-gray-400">Titre du gap</span>
          <div className="text-xl pl-4">{detailGap.title}</div>
        </div>
        <label className="text-sm bg-green-500 p-2 rounded-md font-bold">
          CREATED
        </label>
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
              <main className="flex gap-2 justify-center md:justify-between flex-auto px-2">
                <div>
                  <div className="text-sm">
                    <label>Povince</label>
                    <strong> {detailGap.dataprovince.name} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Territire</label>
                    <strong> {detailGap.dataterritoir.name} </strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm">
                    <label>Zone de santé</label>
                    <strong> {detailGap.datazone.name} </strong>
                  </div>
                  <div className="text-sm">
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
              <main className="flex gap-2 justify-center md:justify-between flex-auto px-2">
                <div>
                  <div className="text-sm">
                    <label>Tot pop</label>
                    <strong> {detailGap.population} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Pop. déplacée </label>
                    <strong> {detailGap.pop_deplace} </strong>
                  </div>
                </div>
                <div>
                  <div className="text-sm">
                    <label>Pop. retournée</label>
                    <strong> {detailGap.pop_retourne} </strong>
                  </div>
                  <div className="text-sm">
                    <label>Pop. su site </label>
                    <strong> {detailGap.pop_site} </strong>
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
              <main className="flex gap-2 justify-center md:justify-between flex-wrap px-2">
                {detailGap.datamaladie.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1 ">
                      {`${key + 1}.`}
                      <strong> {item.maladie.name} </strong>
                    </label>
                    <div className="pl-4">
                      <p>
                        <label>
                          Nb des cas : <strong>{item.nbrCas} </strong>
                        </label>
                      </p>
                      <p>
                        <label>
                          Nb des décès : <strong>{item.nbrDeces} </strong>
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
              <main className="flex gap-2 justify-center md:justify-between flex-wrap px-2">
                {detailGap.datamedicament.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1">
                      {`${key + 1}.`}
                      <strong> {item.medicament.name} </strong>
                    </label>
                    <div className="pl-4">
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
            mainTitle="Info les partenaires d'appuits"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-center md:justify-between flex-wrap px-2">
                {DETAIL_GAP.datapartenaire.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1">
                      {`${key + 1}.`}
                      <strong> {item.partenaire.name} </strong>
                    </label>
                    <div className="pl-4">
                      <p>
                        <label>
                          Telephone <strong>{item.partenaire.phone} </strong>
                        </label>
                      </p>
                      <p>
                        <label>
                          Point focal
                          <strong>{item.partenaire.pointfocal || "-"} </strong>
                        </label>
                      </p>
                      <div>
                        <label className="font-bold text-gray-400">
                          Indicateurs
                        </label>
                        <div className="px-2">
                          {item.indicateurs.map((item: any, key: number) => (
                            <p key={key}> - {item.indicator.name} </p>
                          ))}
                        </div>
                      </div>
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
            mainTitle="Info les personnels"
            classNameChidren="text-xl"
            classNameMainTitle="text-sm"
          >
            <div>
              <main className="flex gap-2 justify-center md:justify-between flex-wrap px-2">
                {detailGap.datatypepersonnel.map((item: any, key: number) => (
                  <div className="text-sm" key={key}>
                    <label className="font-bold text-main-color p-1">
                      <strong>
                        {` - ${item.typepersonnel.name}: ${item.nbr} `}
                      </strong>
                    </label>
                  </div>
                ))}
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
