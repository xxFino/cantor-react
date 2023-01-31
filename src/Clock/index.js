import { useState, useEffect } from "react";
import { ClockContainer } from "./styled";

export const Clock = (() => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timeId)
        };
    }, []);

    return (
        <ClockContainer>
            Dzisiaj jest {" "} 
            {date.toLocaleString("pl-PL", {
                weekday: "long", day: "numeric", month: "long",
            })}
            {", "} {date.toLocaleTimeString()}
        </ClockContainer>
    )
});


