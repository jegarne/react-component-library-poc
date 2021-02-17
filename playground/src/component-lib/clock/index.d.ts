import React from "react";
export declare const useDate: () => {
    day: string;
    date: number;
    month: string;
    time12hr: string;
    time24hr: string;
};
interface ClockProps {
    color?: string;
}
declare const Clock: React.FC<ClockProps>;
export { ClockProps, Clock };
