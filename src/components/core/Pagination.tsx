import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { IDataPagination } from "@/types/commonTypes";

export const classPag = `cursor-pointer rounded-full border bg-light-gray-100 hover:text-gray-600`;

interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
  dataPagination: Partial<IDataPagination>;
  disabled?: boolean;
}
function CustomPagination({
  previousPage,
  nextPage,
  dataPagination,
  disabled,
}: PaginationProps) {
  return (
    <div className="my-3 px-1 flex items-center justify-between text-text-xl text-gray-400 gap-3">
      <div className="text-sm">
        Page {dataPagination.page} sur {dataPagination.count}
      </div>
      <div className="flex justify-end gap-3 ">
        <Tooltip title="Page avant">
          <MdNavigateBefore
            className={`${classPag}`}
            disabled={disabled}
            onClick={previousPage}
          />
        </Tooltip>
        <Tooltip title="Page suivante">
          <MdNavigateNext
            disabled={disabled}
            className={`${classPag}`}
            onClick={nextPage}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default CustomPagination;
