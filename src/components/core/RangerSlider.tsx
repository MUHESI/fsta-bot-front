import React from "react";

export enum RANGE_CLASS {
  rangeBlue = "range-blue",
  rangeRed = "range-red",
  brightOrange = "range-bright-orange",
}
interface IRangerSliderProps {
  data: { value: string; label: string; lNumber: number };
  className?: string;
  typeRanger: RANGE_CLASS;
}

function RangerSlider({ className, typeRanger, data }: IRangerSliderProps) {
  return (
    <div>
      <div className="box">
        <span className=" mr-2  text-xs text-gray-400">{data.label}</span>
        <input
          style={{
            background: "#edf1f4",
          }}
          type="range"
          className={`range ${className && className} ${typeRanger}`}
          value={data.value}
          min="0"
          max={"100"}
          id="rangeValue"
        />
        <span className=" ml-2 text-sm text-gray-400 ">{data.lNumber}</span>
      </div>
    </div>
  );
}

export default RangerSlider;

function LegendRangerSlider() {
  return <div className="border-b mb-2 text-xs pb-1">Legend</div>;
}

export { LegendRangerSlider };
