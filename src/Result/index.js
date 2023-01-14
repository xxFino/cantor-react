const Result = ({ amount, rate }) => {
    const result = amount / rate;
    
    return (
        <>
        Otrzymam: <strong>{result.toFixed(2)}</strong>
        </>
    );
};

export default Result;