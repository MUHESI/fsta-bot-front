import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
// import { DATA_CHART } from "./config";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
// import { handleDate } from "../handleDate";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export const DATA_CHART = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Gaps repondus",
      data: [350, 400, 450, 450, 430, 450, 550, 600, 490, 510, 500, 400],

      backgroundColor: "rgba(0, 0, 255, 0.15)",
      // backgroundColor: "blue",
      borderColor: "rgba(0, 0, 255, 0.2)",
      tension: 0.4,
      fill: true,
      // pointStyle: "rect",
      // pointBorderColor: "blue",
      // pointBackgroundColor: "#fff",
      pointRadius: 0,

      showLine: true,
    },
    {
      label: "Gaps non repondus",
      data: [250, 300, 350, 350, 400, 500, 650, 700, 650, 500, 600, 650],
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      borderColor: "rgba(0, 0, 0, 0.3)",
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      showLine: true,
    },
    {
      label: "Alerte remontées",
      data: [50, 215, 230, 300, 300, 300, 250, 300, 300, 250, 200, 250, 290],
      backgroundColor: "rgba(245, 128, 62, 0.25)",
      borderColor: "rgba(245, 128, 62, 0.35)",
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      showLine: true,
    },
  ],
};

function ChartComponent() {
  const [data, setData] = useState({ ...DATA_CHART });
  const [showStatus, setShowStatus] = useState(false);

  // useEffect(() => {
  //   if (dataAxis) {
  //     let data_ = { ...data };
  //     data_.labels = data.labels.slice(0, handleDate.currentMonth);
  //     data_.datasets[0].data = dataAxis;
  //     data_.datasets[0].label = legend;
  //     setData(data_);
  //   }
  // }, [dataAxis]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowStatus(true);
  //   }, 50);
  // }, []);
  return (
    <div
      style={{
        width: "100%",
        // height: "300px",
        // paddingTop: " 20px",
      }}
    >
      <Line data={data} />
    </div>
  );
}

export default ChartComponent;
