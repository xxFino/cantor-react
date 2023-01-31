import { ClockContainer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = (() => {
    const date = useCurrentDate();

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