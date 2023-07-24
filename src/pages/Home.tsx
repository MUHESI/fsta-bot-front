import { useNavigate } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

function Home() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = () => {
    console.clear();
    // setUser({ email: "MUHES", name: "MUSS" });
    navigate("/e-commerce");
    console.log("Deconnected");
  };
  return <div>Home</div>;
}

export default Home;
