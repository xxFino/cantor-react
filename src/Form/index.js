import { FormContainer, Legend, Fieldset, Input, Select, Loading, Failure } from "./styled";
import { useState } from 'react';
import Result from "../Result";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  
  const ratesData = useRatesData();
  
  return (
    <FormContainer>
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
                /> PLN
              </label>
              <p>
                <label>
                  <Result amount={amount} rate={ratesData.rates[currency]} />
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