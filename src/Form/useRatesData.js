import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF,NOK");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setRatesData({
                    status: "succes",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};