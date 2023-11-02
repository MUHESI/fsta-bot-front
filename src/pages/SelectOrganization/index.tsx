import React from "react";
import { MdChevronLeft } from "react-icons/md";

const tabOrga = [
  {
    id: "1",
    name: "COSAMED",
    logo: "COSAMED.com",
  },
  {
    id: "1",
    name: "ALT-VIP",
    logo: "COSAMED.com",
  },
  {
    id: "1",
    name: "ALT-VIP",
    logo: "COSAMED.com",
  },
  {
    id: "1",
    name: "ALT-VIP",
    logo: "COSAMED.com",
  },
  {
    id: "1",
    name: "ALT-VIP",
    logo: "COSAMED.com",
  },
];

interface IProps {
  affectationsUsser: any[];
  selectOrg: (data: any) => void;
  resetAffectationsUsser: () => void;
}
function SellectOrganization({
  affectationsUsser,
  selectOrg,
  resetAffectationsUsser,
}: IProps) {
  return (
    <div
      className="w-[95%]  m-auto"
      style={{
        // width:"clas",
        border: "",
        // position: "absolute",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className=" w-full md:max-w-[600px]  border min-h-[450px] shadow rounded-md"
      >
        {/* <div className="w-[100%]  flex items-center justify-center">
          <img
            className="object-cover border rounded-full"
            src="https://res.cloudinary.com/chanel-muhesi/image/upload/v1689060660/afia-gap/afia-gap-png_sb58ba.png"
            alt={"..."}
            style={{
              height: "70px",
              width: "70px",
            }}
          />
        </div> */}
        <div className="text-center  mb-[45px]  border-b text-gray-400 py-4">
          <h5 className="text-xl">Vous y etes presques </h5>
          <h4 className="text-xl md:text-2xl text-gray-400 font-bold">
            Selectionner votre organization
          </h4>
        </div>
        <div className="mt-[40ppx] flex flex-wrap  flex-col md:flex-row items-center">
          {affectationsUsser.map((item, key) => (
            <div
              onClick={() => {
                selectOrg(item);
              }}
              key={key}
              // className="bg-gradient-to-r from-main-color to-main-color-500"
              className=" border mb-[40px] w-[95%] rounded-md shadow-md cursor-pointer duration-500  hover:duration-500 hover:scale-105  md:w-[45%] ml-auto mr-auto px-15 "
              // style={{ width: "calc(50% - 15px)" }}
            >
              <div className="w-[100%] h-[70px] flex items-center justify-center">
                <img
                  className="bg-white object-cover border rounded-full"
                  // src="https://res.cloudinary.com/chanel-muhesi/image/upload/v1689060660/afia-gap/afia-gap-png_sb58ba.png"
                  src={item.organisation.logo}
                  alt={"..."}
                  style={{
                    height: "65px",
                    width: "65px",
                    transform: "translateY(-40px)",
                  }}
                />
              </div>
              <div
                className="text-center text-gray-400 font-bold"
                style={{
                  transform: "translateY(-40px)",
                }}
              >
                {item.organisation.name}
              </div>
            </div>
          ))}
        </div>
        <button
          className="font-bold  text-center text-2xl bg-main-color text-white rounded hover:duration-300 hover:opacity-100"
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => resetAffectationsUsser()}
        >
          <MdChevronLeft classNema="" />
        </button>
      </div>
    </div>
  );
}

export default SellectOrganization;
