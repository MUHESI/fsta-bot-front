import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { CommonInputGap } from "@/components/core/Inputs";
import { CommonSelectGap } from "@/components/core/select";
import { CustomButton } from "@/components/core/Button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IMaladie } from "@/types/stateSchema/maladie";
import { useRecoilState } from "recoil";
import { createGap } from "@/globalState/atoms";

function NombreCasMaladiesContextLocal({
  dataMaladies,
}: {
  dataMaladies: IMaladie[];
}) {
  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  const [maladies, setMaladies] = useState<IMaladie[]>([]);
  const [formGap, setFormGap] = useRecoilState(createGap);

  const [formMaladie, setFormMaladie] = useState<{
    dataMaladies: any[];
    maladieid: string;
    nbrDeces: number;
    nbrCas: number;
  }>({
    maladieid: "",
    nbrDeces: 0,
    nbrCas: 0,
    dataMaladies: [],
  });
  useEffect(() => {
    setMaladies(dataMaladies);
  }, [dataMaladies]);

  const addMaladie = () => {
    if (
      formMaladie.maladieid === "" ||
      formMaladie.nbrCas === 0 ||
      formMaladie.nbrCas === 0
    ) {
      return;
    }
    let maladieItem: IMaladie = maladies.filter(
      (item: IMaladie) => item.id === formMaladie.maladieid
    )[0];

    setFormGap({
      ...formGap,
      datamaladie: [
        ...formGap.datamaladie,
        {
          nbrCas: formMaladie.nbrCas,
          nbrDeces: formMaladie.nbrDeces,
          maladieid: formMaladie.maladieid,
        },
      ],
    });
    setFormMaladie({
      ...formMaladie,
      dataMaladies: [
        ...formMaladie.dataMaladies,
        ...[
          {
            ...maladieItem,
            nbrCas: Number(formMaladie.nbrCas),
            nbrDeces: Number(formMaladie.nbrDeces),
            maladieid: formMaladie.maladieid,
          },
        ],
      ],
      nbrCas: 0,
      nbrDeces: 0,
      maladieid: "",
    });
  };

  const removeMaladie = (key: number) => {
    let maladieItem: IMaladie = maladies.filter(
      (item: IMaladie) => item.id === formMaladie.maladieid
    )[0];
    let dataMaldies_ = formMaladie.dataMaladies;
    dataMaldies_.splice(key, 1);
    setFormGap({
      ...formGap,
      datamaladie: [...dataMaldies_],
    });
    let dataMaladies__ = [...formMaladie.dataMaladies];
    dataMaladies__.splice(key, 1);
    setFormMaladie({
      ...formMaladie,
      dataMaladies: dataMaladies__,
    });
  };

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading
          title={
            "Nombre des cas des maladies liées au contexte local (cholera, Rougeole, Méningite, autres) "
          }
        />

        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonSelectGap
            data={maladies || []}
            required={true}
            keyObject="name"
            label="Maladie"
            onChange={(value: any) =>
              setFormMaladie({ ...formMaladie, maladieid: value })
            }
            value={""}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
            required={true}
            label="Nombre des cas"
            pl="eg:200"
            onChange={(e: any) =>
              setFormMaladie({ ...formMaladie, nbrCas: e.target.value })
            }
            value={formMaladie.nbrCas}
          />

          <CommonInputGap
            required={true}
            label="Nombre des décès"
            pl="eg: "
            onChange={(e: any) =>
              setFormMaladie({ ...formMaladie, nbrDeces: e.target.value })
            }
            value={formMaladie.nbrDeces}
          />
        </div>
        <div className="px-5">
          <CustomButton
            onClick={() => addMaladie()}
            label="Ajouter"
            className="ml-auto  rounded-md"
          />
        </div>
        {formMaladie.dataMaladies.map((item, key) => (
          <div className="flex bg-main-color justify-between items-center m-1 mx-5 p-2 rounded-md gap-5 ">
            <div className="text-sm">
              <label>{item.name}</label>
              <div className="mt-2 flex gap-4">
                <p>
                  <span>Cas: </span> <strong> {item.nbrCas} </strong>
                </p>
                <p>
                  <span>Décès: </span> <strong> {item.nbrDeces} </strong>
                </p>
              </div>
            </div>
            <MdOutlineDeleteOutline
              onClick={() => removeMaladie(key)}
              className=" cursor-pointer text-red-400 text-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NombreCasMaladiesContextLocal;
