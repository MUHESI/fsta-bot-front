import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const HoverCardCustom = ({
  description,
  children,
  className,
}: {
  className?: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{children} </HoverCardTrigger>
      <HoverCardContent className={className}>{description}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardCustom;
