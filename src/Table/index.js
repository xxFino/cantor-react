import "./style.css";

const Table = () => (
  <table className="table">
    <caption className="table__caption"><strong>Obecne kursy walut</strong></caption>
    <tr className="table__row">
      <th className="table__ceel table__cell--upper" scope="col">Waluta</th>
      <th className="table__ceel table__cell--upper" scope="col">Kurs</th>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">EUR</th>
      <td className="table__cell">4.65</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">USD</th>
      <td className="table__cell">4.38</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">GPB</th>
      <td className="table__cell">5.34</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">CHF</th>
      <td className="table__cell">4.73</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">NOK</th>
      <td className="table__cell">0.44</td>
    </tr>
  </table>
);

export default Table;