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
  maintainAspectRatio: false,
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
  // "Autres adads",
  // "June",
  // "July",
  // "August",
  // "September",
  // "Oct",
  // "Nov",
  // "Dec",
];

export const dataInit = {
  labels,
  datasets: [
    {
      label: "PIN",
      // data: labels.map(() => faker.datatype.number({ min: 300, max: 10500 })),
      data: [100, 500, 700, 3000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
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
    <div style={{ width: "100%" }}>
      {showStatus && (
        <Bar width={"100%"} height={"250px"} options={options} data={data} />
      )}
    </div>
  );
}
