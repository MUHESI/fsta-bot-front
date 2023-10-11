import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_AFFECTATION } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { useRecoilValue } from "recoil";
import {
  IAffectation,
  getOrganizations,
  getPermissions,
  getRoles,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { SelectCommon } from "@/components/core/select";
import { motion } from "framer-motion";
import { IOrganization } from "@/types/stateSchema/organization";
import { IRole } from "@/types/stateSchema/permissionRole";
import { IUser } from "@/types/stateSchema/user";
import SkeletonAnimation from "@/components/skeleton";
import { IPermission } from "@/types/stateSchema/permission";
import { MdOutlineDone } from "react-icons/md";

// TODO:: FIXE ME LATER
interface IProps {
  dataPermissions: IAffectation[];
}

function ShowPermissionUser({ dataPermissions }: IProps) {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  const [formAffectation, setFormAffectation] = useState(
    INIT_FORM_CREATE_AFFECTATION
  );
  const [statusAddPermission, setStatusAddPermission] =
    useState<boolean>(false);

  const [dataSelected, setDataSelected] = useState<any[]>([]);
  const removeItemFromDataToSelect = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      permissions,
      item
    );
    setPermissions(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(dataSelected, item);
    setDataSelected(newDataSelected);
  };
  const [permissions, setPermissions] = useState<IPermission[]>([]);

  return (
    <div className="">
      <section className="mx-3">
        <div className={commonClassSection}>
          {/* {hideTitle && <LastHeading title={"Les permissions"} />} */}
          <div data-testId="create-province" className="px-5 gap-5">
            <CustomChipBtn
              data={dataPermissions}
              label=""
              saveData={removeItemFromDataToSelect}
              keyObject={"name"}
              disabled={true}
            >
              <MdOutlineDone />
            </CustomChipBtn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowPermissionUser;

const dataCritereVulnerablity = [
  {
    id: 1,
    label: "Hote indigent1",
    value: "Hote indigent",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 3,
    label: "test3",
    value: "Retourne",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 4,
    label: "test4",
    value: "Retourne",
  },
  {
    id: 5,
    label: "test5",
    value: "Retourne",
  },
];
