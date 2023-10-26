import React, { Suspense, useEffect, useState } from "react";
import { LastHeading, SecondHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentGapIDState,
  getAllGaps,
  getInfoGap,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { Checkbox } from "@/components/ui/checkbox";
import { IStateLoading } from "@/types/stateSchema/loading";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { IFetchData } from "@/types/commonTypes";
import { getAPI, postAPI } from "@/utils/fetchData";
import { ICreateGap, IGap } from "@/types/stateSchema/gap";
import SkeletonAnimation, { TexttLoading } from "@/components/skeleton";
import { SelectCommon } from "@/components/core/select";
import { AG_Toast, showToast } from "@/components/core/ToastAlert";
import { CustomButton } from "@/components/core/Button";

function CreateScoreCard() {
  // TODO: Improve this later

  const navigate = useNavigate();

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  // recoil
  const user = useRecoilValue(userAuthenticatedState);
  const currentGapId = useRecoilValue(currentGapIDState);

  const { idGap } = useParams();
  const [idGap_, setidGap_] = useState<string>("");
  const [enteteScoreCard, setEnteteScoreCard] = useState<any[]>([]);
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    loadEnteteScoreCard: {
      status: false,
      msg: "",
    },
    sendScoreCard: {
      status: false,
      msg: "",
    },
  });

  useEffect(() => {
    if (idGap !== "null") {
      setidGap_(currentGapId as string);
      setidGap_(idGap as string);
    } else {
      setidGap_(currentGapId as string);
    }
  }, [idGap, currentGapId]);

  const classNameLasHeading = "border-l-4 border-main-color pl-1";

  const getEnteteScoreCard = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadEnteteScoreCard", lKey: "status" },
          true
        )
      );
      // TODO: typp this laater
      const res = await getAPI<IFetchData<any[]> | undefined>(
        "scorecard/listentete",
        user.token
      );

      if (res?.data) {
        let dataOrigin: any[] = [];
        let data: any[] = [];
        for (let i = 0; i < res?.data?.data.length; i++) {
          res?.data?.data[i].dataquestion.map((item: any) => {
            data.push({ ...item, response: null });
          });
          dataOrigin.push({ ...res?.data?.data[i], dataquestion: data });
          data = [];
        }
        setEnteteScoreCard(dataOrigin);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadEnteteScoreCard", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadEnteteScoreCard", lKey: "status" },
          false
        )
      );
    }
  };

  useEffect(() => {
    getEnteteScoreCard();
  }, []);

  const handleClick = ({ enteteIndex, questionIndex, value }: any) => {
    const enteteScoreCard_ = [...enteteScoreCard];
    enteteScoreCard_[enteteIndex].dataquestion[questionIndex].response = value
      ? 1
      : 0;
    return setEnteteScoreCard(enteteScoreCard_);
  };

  const submitSccoreCard = async () => {
    let dataQuestion: any[] = [];
    for (let i = 0; i < enteteScoreCard.length; i++) {
      enteteScoreCard[i].dataquestion.map((item: any) => {
        if (item.response !== null) {
          dataQuestion.push({
            questionid: item.id,
            reponse: `${item.response}`,
          });
        }
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "sendScoreCard", lKey: "status" },
          true
        )
      );
      let form_ = { gapid: idGap_, datareponse: dataQuestion };
      const { data } = await postAPI<IFetchData<any>, any>(
        "scorecard/sendscorecard",
        form_,
        user.token
      );
      if (data) {
        showToast({
          msg: `Traitement réussie avec succès!`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "sendScoreCard", lKey: "status" },
            false
          )
        );
        navigate(`/gaps`);
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "sendScoreCard", lKey: "status" },
          false
        )
      );
      showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}`,
        type: AG_Toast.statusToast.ERROR,
      });
    }
  };

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création de formulaire GAP partie score"} />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            {idGap == "null" ? (
              <Suspense fallback={<SkeletonAnimation className="px-5" />}>
                <SelectGap />
              </Suspense>
            ) : (
              <Suspense fallback={<TexttLoading />}>
                <ShowTitleGap idGap={idGap || ""} token={user.token} />
              </Suspense>
            )}
          </section>
          {infoLoading.loadEnteteScoreCard.status ? (
            <SkeletonAnimation className="px-5" />
          ) : (
            <section className="mx-3">
              {enteteScoreCard.map((item: any, key: number) => (
                <div key={key} className={commonClassSection}>
                  <LastHeading
                    className="border-l-4 border-main-color pl-1"
                    title={item.name_entete || ""}
                  />
                  {item?.dataquestion?.map((item_: any, key_: number) => (
                    <div
                      key={key_}
                      className={`my-2 py-2 ${
                        key_ + 1 !== item?.dataquestion.length && "border-b"
                      }  `}
                    >
                      <label className="ml-4 text-gray-400 text-sm block mb-2">
                        {item_.name_question}
                      </label>

                      <div className="flex flex-wrap justify-between px-5 gap-5">
                        <div className="flex items-center space-x-2">
                          <p className="flex items-center">
                            <Checkbox
                              id="terms_90"
                              checked={item_.response === 1}
                              // checked={}
                              onClick={() =>
                                handleClick({
                                  enteteIndex: key,
                                  questionIndex: key_,
                                  value: true,
                                })
                              }
                            />
                            <label
                              htmlFor="terms_90"
                              className="mx-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              OUI
                            </label>
                          </p>
                          <p className="flex items-center">
                            <Checkbox
                              id="terms"
                              checked={item_.response === 0}
                              onClick={() =>
                                handleClick({
                                  enteteIndex: key,
                                  questionIndex: key_,
                                  value: false,
                                })
                              }
                            />
                            <label
                              htmlFor="terms"
                              className="mx-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              NON
                            </label>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <div className="btn p-3 flex justify-end ">
                <CustomButton
                  onClick={submitSccoreCard}
                  statusLoading={infoLoading.sendScoreCard.status}
                  disabled={infoLoading.sendScoreCard.status}
                  label="Enregistrer"
                  // style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                />
              </div>
            </section>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateScoreCard;

function SelectGap() {
  const allGaps = useRecoilValue(getAllGaps) as unknown as IGap[];
  const setCurrentGapID = useSetRecoilState(currentGapIDState);

  return (
    <div>
      <SelectCommon
        data={allGaps}
        label="Selectionner les gaps"
        keyObject="title"
        onChange={setCurrentGapID}
        value={"..."}
      />
    </div>
  );
}

function ShowTitleGap({ idGap, token }: { idGap: string; token: string }) {
  const detailGap = useRecoilValue(
    getInfoGap({ idGap: idGap, token })
  ) as unknown as any;

  const commonClass = "border shadow rounded-lg p-2 my-5";
  const commonClassSection = `${commonClass} `;

  return (
    <div
      className={`${commonClassSection} flex flex-wrap justify-between items-center`}
    >
      <div>
        <span className="text-sm text-gray-400">Titre du gap</span>
        <div className="text-sm font-bold pl-4">{detailGap.title}</div>
      </div>
      <label className="text-sm bg-green-500 p-2 rounded-md ">CREATED</label>
    </div>
  );
}
