import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { CommonSelectGap, SelectCommon } from "@/components/core/select";
import { Grid } from "@mui/material";
import { CommonInputGap, InputCommon } from "@/components/core/Inputs";
import {
  ICreateOrganization,
  ITypeOrganization,
} from "@/types/stateSchema/organization";
import { IStateLoading } from "@/types/stateSchema/loading";
import { INIT_FORM_CREATE_ORGANIZATION } from "@/constants/initForm";
import { useRecoilValue } from "recoil";
import { getTypeOrganizations } from "@/globalState/atoms";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { CustomButton } from "@/components/core/Button";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import SkeletonAnimation from "@/components/skeleton";
import { token } from "@/constants/constants";

function CreateOrg() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createOrganization: {
      status: false,
      msg: "",
    },
  });
  const allTypeOrganizations = useRecoilValue(
    getTypeOrganizations
  ) as unknown as ITypeOrganization[];

  const [formOrganization, setFormOrganization] = useState<ICreateOrganization>(
    INIT_FORM_CREATE_ORGANIZATION
  );

  const handleSubmitCreateOrg = async () => {
    if (formOrganization.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createOrganization", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<
        IFetchData<IBaseData>,
        ICreateOrganization
      >("addorga", formOrganization, token);

      //  TODO: Improve this in backend
      // if (data.code === 200 && data.data) {
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createOrganization", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `l'organisation ${formOrganization.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setFormOrganization({ ...INIT_FORM_CREATE_ORGANIZATION });
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateProvince", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
        type: StatusToast.ERROR,
      });
    }
  };
  return (
    <div className="">
      <Grid container spacing={1}>
        {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <section
            className={`${commonClass} mx-3 min-h-60 flex justify-center items-center `}
          >
            <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
          </section>
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer le nom de l'organisation"
                  value={formOrganization.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      name: e.target.value,
                    })
                  }
                />
                <InputCommon
                  required={true}
                  label="Telephone"
                  pl="eg:+243 998799306"
                  value={formOrganization.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <CommonInputGap
                  label="Addresse mail"
                  required={true}
                  pl="eg: cosamed@gmail.com"
                  value={formOrganization.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      email: e.target.value,
                    })
                  }
                  // classNameHoverCard=" border-main-color"
                />
                <CommonSelectGap
                  data={allTypeOrganizations}
                  required={true}
                  keyObject="name"
                  label="Selectionner la province(DPS)"
                  value={formOrganization.typeorgid}
                  onChange={(value: string) =>
                    setFormOrganization({
                      ...formOrganization,
                      typeorgid: value,
                    })
                  }
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonTextareaGap
                  required={true}
                  label="Description"
                  pl="eg: ..."
                  value={formOrganization.description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      description: e.target.value,
                    })
                  }
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Autres infos de l'organisation"} />
              {/* <div className="py-2 px-5 gap-5">
                <CommonInputGap
                  label="Addresse mail"
                  required={true}
                  pl="eg: cosamed@gmail.com"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div> */}
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  type="string"
                  label="Addresse"
                  pl="eg:....."
                  value={formOrganization.adresse}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      adresse: e.target.value,
                    })
                  }
                />
                <CommonInputGap
                  required={true}
                  label="Sigle"
                  pl="eg: COSAMED"
                  value={formOrganization.sigle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      sigle: e.target.value,
                    })
                  }
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Point focal"
                  pl="eg:..."
                  value={formOrganization.pointfocal}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormOrganization({
                      ...formOrganization,
                      pointfocal: e.target.value,
                    })
                  }
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* <div className={commonClassSection}>
              <LastHeading
                title={"Information specifique au type d'organisation"}
              />
              <p className=" mx-5 text-[0.6em] font-bold border-l-4 border-main-color px-2">
                Zone de sante
              </p>
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  required={true}
                  label="Nb de personnels"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
                <InputCommon
                  required={true}
                  label="Nb de infirmiers"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  required={true}
                  label="Nb de sage femmes"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
                <InputCommon
                  required={true}
                  label="Nb de lits"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
              </div>
            </div> */}
            <div className="btn py-2 px-5 flex justify-end">
              <CustomButton
                onClick={handleSubmitCreateOrg}
                statusLoading={infoLoading.createOrganization.status}
                disabled={infoLoading.createOrganization.status}
                label="Enregistrer"
                // style={{ border: "1px solid #2DAEC4" }}
                className="ml-auto  rounded-md"
              />
            </div>
            {/* <div className="btn p-3 flex justify-end ">
              <Button
                variant="primary"
                style={{ border: "1px solid #2DAEC4" }}
                className="ml-auto  rounded-md"
              >
                Enregistrer
              </Button>
            </div> */}
          </section>
        </Grid>
      </Grid>
      {/* <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
        </section>
       
      </div> */}
    </div>
  );
}

function CreateOrganization() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création de l'organisation"} />
      </div>
      <Suspense
        fallback={[1, 2, 2].map((key) => (
          <SkeletonAnimation className="px-5" key={key} />
        ))}
      >
        <CreateOrg />
      </Suspense>
    </div>
  );
}
export default CreateOrganization;
