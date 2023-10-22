import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "../../styles/loadingStyle.css";

function LoadingPage() {
  return (
    <div
      className="mainLoading"
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
      }}
    >
      <div className="fancy-spinner">
        <div
          className="ring"
          // style={{
          //   color: "red",
          //   borderColor: "red",
          // }}
        />
        <div
          className="ring"
          // style={{
          //   color: "red",
          //   borderColor: "red",
          // }}
        />
        <div
          className="dot"
          // style={{
          //   color: "red",
          //   borderColor: "red",
          // }}
        />
      </div>
    </div>
  );
}

export default LoadingPage;

export function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress color="success" variant="determinate" value={progress} />
    </Box>
  );
}
