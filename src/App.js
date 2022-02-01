import styled from "styled-components";
import HomeComponent from "./component/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 10px;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expenses Compta</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
