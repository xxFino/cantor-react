import { useState, useEffect } from "react";
import "./style.css";

export const Clock = (() => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const timeId = setInterval(() => {
            setMyDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timeId)
        };
    }, []);

    return (
        <div className="date">
            Dzisiaj jest {" "} 
            {myDate.toLocaleString("pl-PL", {
                weekday: "long", day: "numeric", month: "long",
            })}
            {", "} {myDate.toLocaleTimeString()}
        </div>
    )
});


