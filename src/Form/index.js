import "./style.css";

const Form = () => (
  <form className="form">
    <legend className="form__legend">
      <strong>Kalkulator walut</strong>
    </legend>
    <fieldset className="form__fieldset">
      <label>
        Posiadam: <input required type="number" min="0" step="0.01" /> PLN
      </label>
      <p>
        <label>
          Otrzymam: <strong></strong>
        </label>
        <select>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GPB">GPB</option>
          <option value="CHF">CHF</option>
          <option value="NOK">NOK</option>
        </select>
      </p>
    </fieldset>
    <button className="form__button">Przelicz!</button>
  </form>
);

export default Form;