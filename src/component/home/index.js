import styled from "styled-components";
import ViewComponent from "./viewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  const CalculateBalance = () => {
    let exp = 0;
    let inc = 0;
    // eslint-disable-next-line array-callback-return
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amoount)
        : (inc = inc + payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => CalculateBalance(), [transactions]);
  return (
    <Container>
      <ViewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
