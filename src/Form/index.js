import "./style.css";
import { useState } from 'react';
import currencies from "../Currencies";
import Result from "../Result";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const rate = currencies.find(({ name }) => name === currency).rate;

  return (
    <form className="form">
      <legend className="form__legend">
        <strong>Kalkulator walut</strong>
      </legend>
      <fieldset className="form__fieldset">
        <label>
          Posiadam: <input
            className="form__input"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            required type="number"
            min="0"
            step="0.01"
          /> PLN
        </label>
        <p>
          <label>
            <Result amount={amount} rate={rate} />
          </label>
          <select
            className="form__select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.id}
                value={currency.name}
              >
                {currency.valueName}
              </option>
            )))};
          </select>
        </p>
      </fieldset>
    </form>
  )
};

export default Form;