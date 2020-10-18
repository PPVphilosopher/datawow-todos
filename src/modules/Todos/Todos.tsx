import React, { useState } from "react";
import {
  ListTitleWrapper,
  Container,
  Wrapper,
  ListWrapper,
} from "./Todos.style";
import { ProgressBox, Select } from "../../components";
import { TASK_TYPE } from "../../constants";

const options = [
  { label: "All", value: TASK_TYPE.ALL },
  { label: "Done", value: TASK_TYPE.DONE },
  { label: "Undone", value: TASK_TYPE.UNDONE },
];

const Todos: React.FC = () => {
  const [taskType, setTaskType] = useState(options[0]);

  return (
    <Wrapper>
      <Container>
        <ProgressBox success={3} total={5} />
        <ListWrapper>
          <ListTitleWrapper>
            <span>Tasks</span>
            <Select options={options} value={taskType} onChange={setTaskType} />
          </ListTitleWrapper>
        </ListWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
