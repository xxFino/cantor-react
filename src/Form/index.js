import "./style.css";
import { useState } from 'react';
import Result from "../Result";
import currencies from "../currencies.js";
import { Clock } from "../Clock";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");

  const rate = currencies.find(({ code }) => code === currency).rate;

  return (
    <form className="form">
      <div>
        <Clock />
      </div>
      <legend className="form__legend">
        <strong>Kalkulator walut</strong>
      </legend>
      <fieldset className="form__fieldset">
        <label>
          Posiadam: <input
            className="form__input"
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
          <select
            className="form__select"
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
          </select>
        </p>
      </fieldset>
    </form>
  )
};

export default Form;