import { FormContainer, Legend, Fieldset, Input, Select } from "./styled";
import { useState } from 'react';
import Result from "../Result";
import currencies from "../currencies.js";
import { Clock } from "../Clock";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");

  const rate = currencies.find(({ code }) => code === currency).rate;

  return (
    <FormContainer>
      <div>
        <Clock />
      </div>
      <Legend>
        <strong>Kalkulator walut</strong>
      </Legend>
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
            <Result amount={amount} rate={rate} />
          </label>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.code}
                value={currency.code}
              >
                {currency.name}
              </option>
            )))};
          </Select>
        </p>
      </Fieldset>
    </FormContainer>
  )
};

export default Form;