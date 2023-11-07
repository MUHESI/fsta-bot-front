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
  "pop. eloignées",
  "PIN",
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

export function BarChart({
  dataAxis,
}: {
  dataAxis: {
    pop_deplace: number;
    pop_eloigne: number;
    pop_retourne: number;
    pin: number;
  };
}) {
  const [data, setData] = useState({ ...dataInit });
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setShowStatus(false);
    let data_ = { ...data };
    data_.datasets[0].data[0] = dataAxis.pop_deplace;
    data_.datasets[0].data[1] = dataAxis.pop_retourne;
    data_.datasets[0].data[2] = dataAxis.pop_eloigne;
    data_.datasets[0].data[3] = dataAxis.pin;
    setData(data_);
    setTimeout(() => {
      setShowStatus(true);
    }, 50);
  }, [dataAxis]);

  useEffect(() => {}, [dataAxis]);

  return (
    <div style={{ width: "100%" }}>
      {showStatus && (
        <Bar width={"100%"} height={"250px"} options={options} data={data} />
      )}
    </div>
  );
}
