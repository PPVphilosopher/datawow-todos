import React from "react";
import { Container, Wrapper } from "./Todos.style";
import { ProgressBox } from "../../components";

const Todos: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ProgressBox success={3} total={5} />
      </Container>
    </Wrapper>
  );
};

export default Todos;
