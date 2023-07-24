// import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../components/hooks/useAuth";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function Login() {
  // const { setUser } = useAuth();
  // const location = useLocation();

  // const navigate = useNavigate();
  // const from = location?.state?.from?.pathname || "/";

  // const handleLogin = () => {
  //   console.clear();
  //   setUser({ email: "muhes@g.com", name: "MOSES" });
  //   navigate(from, { replace: true });
  //   console.log("connected");
  // };

  return (
    <div className=" w-full flex flex-col justify-center min-h-screen py-2 bg-gray-100">
      <div className="border flex flex-col  items-center justify-center w-full flex-1 px-20  text-center ">
        <main className="bg-white rounder-2xl shadow-2xl flex w-2/3 max-w-4xl ms:max-md:flex-col">
          <div className="w-3/5">
            <div className="text-left font-bold text-lg p-2">
              <span className="text-green-500"> AFIA</span>-GAP
            </div>
            <div className="text-center font-bold text-lg p-5">
              <h2 className="text-3xl font-bold text-green-500">
                sig In to account
              </h2>
              <div className="border-2 w-10 inline-block mb-2 border-green-500"></div>
              <div className=" flex justify-center my-2 ">
                <a
                  href="#"
                  className=" border-2 text-gray-400 border-gray-200 rounded-full p-2 mx-1"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className=" border-2 text-gray-400 border-gray-200 rounded-full p-2 mx-1"
                >
                  <FaGoogle />
                </a>
                <a
                  href="#"
                  className=" border-2 text-gray-400 border-gray-200 rounded-full p-2 mx-1"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <p className="text-gray-400">Or use your email account </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2 text-sm" />
                <input
                  type="password"
                  name="password"
                  placeholder="your password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="flex  justify-between w-64 mb-5 ">
                <label className="flex items-center text-xs">
                  <input className="mr-1" type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot password?
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  className="border text-green-500 text-sm px-12 py-1 border-green-500 rounded-full  inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/5 md:block hidden  bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-body mb-2"> hello world </h2>
            <div className="border-2 w-10 inline-block mb-2 border-white"></div>
            <p className="text-xs mb-2">
              Afia-Gap section easui juisdic sdocs viwedivs contact us
            </p>
            <a
              href="#"
              className="border text-sm px-12 py-1 border-white rounded-full  inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
