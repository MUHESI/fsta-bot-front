import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { AiFillCloseCircle } from "react-icons/ai";

type Anchor = "top" | "left" | "bottom" | "right";

export const allOptionsDrawer = {
  position: "right",
  openDefault: false,
};

interface IProps {
  closeDrawer: () => void;
  randomCloseDrawer: number;
  options: any;
  mainTitle: string;
  textBtn: string;
}

export default function SwipeableCustom({
  children,
  randomCloseDrawer,
  options,
  mainTitle,
  textBtn,
}: React.PropsWithChildren<IProps>) {
  const [positionDawer] = React.useState(options?.position || "right");
  const [state, setState] = React.useState<any>({
    right: options.openDefault,
  });

  const hundleDrawer = (anchor: string, open: boolean) => {
    return setState({ ...state, [anchor]: open });
  };

  React.useEffect(() => {
    if (randomCloseDrawer !== 0) {
      hundleDrawer(positionDawer, false);
    }
  }, [randomCloseDrawer]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer(positionDawer, true)}>{textBtn}</button>
        <SwipeableDrawer
          anchor={positionDawer}
          open={state[positionDawer]}
          onClose={toggleDrawer(positionDawer, false)}
          onOpen={toggleDrawer(positionDawer, true)}
        >
          <div
            className="m-2 h-screen border border-main-color rounded-md p-2"
            style={{ maxWidth: 650 }}
          >
            <div className=" text-main-color flex justify-between items-center gap-2">
              <h2 className="text-xl">{mainTitle}</h2>
              <AiFillCloseCircle
                className="cursor-pointer text-xl"
                onClick={() => hundleDrawer(positionDawer, false)}
              />
            </div>
            <div className="pt-5 px-5"> {children} </div>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
