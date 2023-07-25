import { useNavigate } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import { showToast } from "../components/core/ToastAlert";

function Home() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    console.clear();
    // setUser({ email: "MUHES", name: "MUSS" });
    navigate("/e-commerce");
    console.log("Deconnected");
  };
  return (
    <div
      onClick={() => {
        console.clear();
        console.log("first>>>");
        showToast({ msg: "cool", type: "success" });
      }}
    ></div>
  );
}

export default Home;
