import "./style.css";

const Table = () => (
  <table className="table">
    <caption className="table__caption"><strong>Obecne kursy walut</strong></caption>
    <tr className="table__row">
      <th className="table__ceel table__cell--upper" scope="col">Waluta</th>
      <th className="table__ceel table__cell--upper" scope="col">Kurs</th>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">Euro</th>
      <td className="table__cell">4.65</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">Dolar amerykański</th>
      <td className="table__cell">4.38</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">Funt brytyjski</th>
      <td className="table__cell">5.34</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">Frank szwajcarski</th>
      <td className="table__cell">4.73</td>
    </tr>
    <tr className="table__row">
      <th className="table__cell" scope="row">Korona norweska</th>
      <td className="table__cell">0.44</td>
    </tr>
  </table>
);

export default Table;