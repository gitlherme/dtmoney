import { Container } from "./styles";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";
import { useTransactions } from "../../../hooks/useTransactions";

export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc
  }, { deposits: 0, withdraws: 0, total: 0 })

  return (
    <Container>
      <div>
        <header>
          <h2>Incomes</h2>
          <img src={incomeImg} alt="incomings" />
        </header>
        <strong>
          { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits) }
        </strong>
      </div>

      <div>
        <header>
          <h2>Outcomes</h2>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>
         - { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws) }
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        { new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total) }
        </strong>
      </div>
    </Container>
  )
}