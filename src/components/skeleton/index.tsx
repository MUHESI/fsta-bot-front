import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonAnimation({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <Box sx={{ width: "100%" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}

export function TexttLoading({
  text,
  className,
}: {
  className?: string;
  text?: string;
}) {
  return (
    <div className={`text-sm ${className} `}>{text || "Chargement..."}</div>
  );
}
