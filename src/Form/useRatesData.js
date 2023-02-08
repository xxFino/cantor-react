import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,GBP,CHF,NOK");                

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

        setTimeout(axiosRates, 1000);
    }, []);

    return ratesData;
};