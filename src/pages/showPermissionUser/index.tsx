import React, { useState } from "react";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { IAffectation } from "@/globalState/atoms";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { IPermission } from "@/types/stateSchema/permission";
import { MdOutlineDone } from "react-icons/md";

// TODO:: FIXE ME LATER
interface IProps {
  dataPermissions: IAffectation[];
}

function ShowPermissionUser({ dataPermissions }: IProps) {
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
        <div className="rounded-lg">
          <div>
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
