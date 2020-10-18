import React, { useState } from "react";
import { ProgressBox, Select, Task } from "../../components";
import { TASK_TYPE } from "../../constants";
import { ISelectOption, ITask } from "../../interfaces";
import {
  Container,
  ListTitleWrapper,
  ListWrapper,
  Wrapper,
} from "./Todos.style";

const options: ISelectOption[] = [
  { label: "All", value: TASK_TYPE.ALL },
  { label: "Done", value: TASK_TYPE.DONE },
  { label: "Undone", value: TASK_TYPE.UNDONE },
];

const data: ITask[] = [
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
    title: "Buy food for dinner",
    completed: true,
  },
  {
    id: "f619466c-a016-4281-b584-7db2795d103d",
    title: "Call Marie at 10.00 PM",
    completed: false,
  },
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908602",
    title: "Write a react blog post",
    completed: false,
  },
];

const Todos: React.FC = () => {
  const [taskType, setTaskType] = useState(options[0]);

  const displayList = React.useMemo(() => {
    switch (taskType.value) {
      case TASK_TYPE.DONE:
        return data.filter((task) => task.completed);

      case TASK_TYPE.UNDONE:
        return data.filter((task) => !task.completed);

      default:
        return data;
    }
  }, [taskType]);

  return (
    <Wrapper>
      <Container>
        <ProgressBox success={3} total={5} />
        <ListWrapper>
          <ListTitleWrapper>
            <span>Tasks</span>
            <Select options={options} value={taskType} onChange={setTaskType} />
          </ListTitleWrapper>
          {displayList.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ListWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
