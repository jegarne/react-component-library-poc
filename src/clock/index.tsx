import React from "react";
import styled from "styled-components";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = today.getDate();
  const month = today.toLocaleDateString(locale, { month: "long" });

  const time12hr = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const time24hr = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });

  return {
    day,
    date,
    month,
    time12hr,
    time24hr,
  };
};

const StyledClock = styled.div<{ color?: string }>`
  color: ${(p) => p.color || "pink"};
`;

interface ClockProps {
  color?: string;
}

const Clock: React.FC<ClockProps> = ({ color }) => {
  const now = useDate();
  return (
    <StyledClock color={color}>
      {" "}
      <p>
        {now.day}, {now.month} {now.date} at {now.time12hr}
      </p>{" "}
    </StyledClock>
  );
};

export { ClockProps, Clock };
