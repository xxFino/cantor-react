import "./style.css";
import currencies from "../currencies";

const Table = () => (
  <table className="table">
    <caption className="table__caption"><strong>Obecne kursy walut</strong></caption>
    <tr className="table__row">
      <th className="table__ceel table__cell--upper" scope="col">Waluta</th>
      <th className="table__ceel table__cell--upper" scope="col">Kurs</th>
    </tr>
    {currencies.map(({ rate, name }) => (
      <tr className="table__row" key={name}>
        <th className="table__cell" scope="row">{name}</th>
        <td className="table__cell">{rate}</td>
      </tr>
    ))}
  </table>
);

export default Table;