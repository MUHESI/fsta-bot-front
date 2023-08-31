import React from "react";
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
