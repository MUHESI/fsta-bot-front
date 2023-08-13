import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  initialState as initialState_,
  isCLickedState,
} from "@/globalState/atoms";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}: any) => {
  const setIsClicked = useSetRecoilState(isCLickedState);
  const initialState = useRecoilValue(initialState_);

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;

// AUTH
interface IpropsAuthButton {
  statusLoading?: boolean;
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
}
export function CustomButton({
  statusLoading,
  onClick,
  label,
  disabled,
  className,
}: IpropsAuthButton) {
  return (
    <button
      onClick={onClick}
      disabled={statusLoading || disabled}
      className={`${className}  border text-main-color text-sm px-12 py-2 border-main-color cursor-pointer  inline-block font-semibold hover:bg-main-color  hover:text-white md:px-5`}
    >
      {statusLoading ? "Chargement..." : label}
    </button>
  );
}
