import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    const url = "https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF,NOK";

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(url);                

                const { rates, date } = await response.data;

                setRatesData({
                    status: "succes",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
                console.error(setRatesData)
            }
        };

        setTimeout(getRates, 1000);
    }, []);

    return ratesData;
};