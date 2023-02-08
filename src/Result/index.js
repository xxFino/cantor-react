import { StyledResult } from "./styled";

const Result = ({ result }) => {
    return !!result && (
        <StyledResult>
            <>
                {result.startAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.endAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        </StyledResult>
    )
};

export default Result;