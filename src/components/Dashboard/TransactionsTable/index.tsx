import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$5000</td>
            <td>Incoming</td>
            <td>20/06/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1100</td>
            <td>Outcome</td>
            <td>20/06/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}