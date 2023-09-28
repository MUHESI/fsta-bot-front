

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
            label: "First Dataset",
            // data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 0, 0],
            data: [10, 20, 30, 500, 551, 400, 600, 550, 700, 600, 400, 600],
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            borderColor: "blue",
            tension: 0.4,
            fill: true,
            pointStyle: "rect",
            pointBorderColor: "blue",
            pointBackgroundColor: "#fff",
            showLine: true,
        },
    ],
};