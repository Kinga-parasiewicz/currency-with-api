import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [timeContent, setTimeContent] = useState(date.toLocaleTimeString());
  const structureDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    setTimeContent(date.toLocaleTimeString());
  }, [date]);

  setTimeout(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });
  return (
    <StyledClock>
      Dzisiaj jest {structureDate}, &nbsp;{timeContent}
    </StyledClock>
  );
};
