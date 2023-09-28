import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// import { styleTheme } from "../../../styles/theme";
// import { handleDate } from "../handleDate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " ",
    },
  },
};

const labels = [
  "pop. déplacées",
  "pop. rétournées",
  "pop. moins eloignées",
  "Autres",
];

export const dataInit = {
  labels,
  datasets: [
    {
      label: "PIN",
      // data: labels.map(() => faker.datatype.number({ min: 300, max: 10500 })),
      data: [20, 500, 700, 3000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function calculateHeight() {
  let length = dataInit.datasets[0].data ? dataInit.datasets[0].data.length : 0;
  switch (true) {
    case length >= 0 && length <= 7:
      return 50 + length * 50;
    case length > 8:
      return 450 + (length - 8) * 50;
    default:
      return 450;
  }
}
const dataHorizontal = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset",
      backgroundColor: "#f87979",
      borderColor: "#f87979",
      borderWidth: 1,
      hoverBackgroundColor: "#f87979",
      hoverBorderColor: "#f87979",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const chartOptions = {
  responsive: true,
};

export function BarChart({ bgColor }: { bgColor?: string }) {
  const [data, setData] = useState({ ...dataInit });
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    //  if (bgColor) {
    //    let data_ = { ...data };
    //    data_.labels = data.labels.slice(0, handleDate.currentMonth);
    //    data_.datasets[0].data = dataAxis;
    //    data_.datasets[0].label = legend;
    //    setData(data_);
    //  }
    if (bgColor) {
      let data_ = { ...data };
      data_.datasets[0].backgroundColor = "rgba(54, 162, 235, 0.6)";
      setData(data_);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowStatus(true);
    }, 50);
  }, []);

  return (
    <div className={""} style={{ height: calculateHeight() }}>
      {/* <Bar
        data={dataHorizontal}
        ref={(reference) => {
          chartReference = reference;
        }}
        options={chartOptions}
      /> */}
    </div>
  );
}
