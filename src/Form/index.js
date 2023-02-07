import { FormContainer, Legend, Fieldset, Input, Select, Loading, Failure } from "./styled";
import { useState } from 'react';
import Result from "../Result";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("1");
  const [result,  setResult] = useState();
  
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      startAmount: +amount,
      endAmount: amount * rate,
      currency,
    });
  }

  return (
    <FormContainer calculateResult={calculateResult}>
      <div>
        <Clock />
      </div>
      <Legend>
        <strong>Kalkulator walut</strong>
      </Legend>
      {ratesData.status === "loading"
        ? (
          <Loading>
            Sekundka... <br /> Ładuję kursy walut
          </Loading>
        )
        : (
          ratesData.status === "error" ? (
            <Failure>
              Coś poszło nie tak
            </Failure>
          ) : (
            <Fieldset>
              <label>
                Posiadam: <Input
                  value={amount}
                  onChange={({ target }) =>
                    setAmount(target.value)}
                  required type="number"
                  min="0"
                  step="0.01"
                /> 
              </label>
              <p>
                <label>
                  <Result result={result} />
                </label>
                <Select
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(ratesData.rates).map((currency => (
                    <option
                      key={currency}
                      value={currency}
                    >
                      {currency}
                    </option>
                  )))};
                </Select>
              </p>
            </Fieldset>
          )
      )}
    </FormContainer>
  )
};

export default Form;