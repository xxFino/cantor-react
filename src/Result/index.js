const Result = ({ amount, currency }) => {
    const result = amount / currency;
    
    return (
        <>
        Otrzymam: <strong>{result.toFixed(2)}</strong>
        </>
    );
};

export default Result;