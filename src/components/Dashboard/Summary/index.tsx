import { Container } from "./styles";

import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import totalImg from "../../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <h2>Incomes</h2>
          <img src={incomeImg} alt="incomings" />
        </header>
        <strong>
          R$1000
        </strong>
      </div>

      <div>
        <header>
          <h2>Outcomes</h2>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>
          R$500
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          R$500
        </strong>
      </div>
    </Container>
  )
}