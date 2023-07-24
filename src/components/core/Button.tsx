import { useStateContext } from "../../contexts/contextPorvider";

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
  const { setIsClicked, initialState } = useStateContext();

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
  statusLoading: boolean;
  onClick: () => void;
  label: string;
  disabled?: boolean;
}
export function AuthButton({
  statusLoading,
  onClick,
  label,
  disabled,
}: IpropsAuthButton) {
  return (
    <button
      onClick={onClick}
      disabled={statusLoading || disabled}
      className="border text-main-color text-sm px-12 py-1 border-main-color rounded-full  inline-block font-semibold hover:bg-main-color  hover:text-white md:px-5"
    >
      {statusLoading ? "Chargement..." : label}
    </button>
  );
}
