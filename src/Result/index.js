const Result = ({ result }) => {
    !!result && (
        <>
            {result.startAmount.toFixed(2)}&nbsp;PLN&nbsp;=
            {" "}
            <strong>
                {result.endAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </>
    )
};

export default Result;