import React, { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { activeMenuState, screenSizeState } from "../../globalState/atoms";
import { verifyMobileScreenSize } from "../core/Sidebar";

function VerifyBreakPoint({
  className,
  children,
}: PropsWithChildren<{ className: string }>) {
  const activeMenu = useRecoilValue(activeMenuState);
  const screenSize = useRecoilValue(screenSizeState);
  return (
    <div
      className={className}
      style={{
        width: `${
          verifyMobileScreenSize(screenSize)
            ? "100%"
            : activeMenu
            ? " calc(100% - 300px)"
            : "calc(100% - 90px)"
        }`,

        marginLeft: `${
          verifyMobileScreenSize(screenSize)
            ? "0"
            : activeMenu
            ? "300px"
            : "80px"
        }`,
      }}
    >
      {children}
    </div>
  );
}
export default VerifyBreakPoint;

// export function verifyMobileScreenSize(screenSize: undefined | number) {

//   return screenSize !== undefined && screenSize <= 700;
// }
