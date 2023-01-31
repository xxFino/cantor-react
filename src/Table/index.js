import { TableStyle, TableCaption, TableCell, TableHeader } from "./styled"
import currencies from "../currencies";

const Table = () => (
  <TableStyle>
    <TableCaption><strong>Obecne kursy walut</strong></TableCaption>
    <tr>
      <TableHeader scope="col">Waluta</TableHeader>
      <TableHeader className="table__cell table__cell--upper" scope="col">Kurs</TableHeader>
    </tr>
    {currencies.map(({ rate, name }) => (
      <tr key={name}>
        <TableCell scope="row">{name}</TableCell>
        <TableCell>{rate}</TableCell>
      </tr>
    ))}
  </TableStyle>
);

export default Table;