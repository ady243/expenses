import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weigth: bold;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    backrgound: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;
const Cell = styled.div`
 display: flex;
 flex-direction:row;
padding: 10px 15px;
font-size:14px;
border-radius: 2px;
align-items:center;
font-weigth:normal;
justify-content:space-between;
  }
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <span>{props.payload.desc}</span>
      <span>{props.payload.amount}</span>
    </Cell>
  );
};
const TransactionComponent = (props) => {
  return (
    <Container>
      Transaction
      {props.transactions?.length
        ? props.transactions.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </Container>
  );
};

export default TransactionComponent;
