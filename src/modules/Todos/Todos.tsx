import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ProgressBox, Select, Task, TaskForm } from "../../components";
import { TASK_TYPE } from "../../constants";
import { ISelectOption, ITask } from "../../interfaces";
import { createTodo, fetchTodos, TRootState } from "../../redux";
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

const Todos: React.FC = () => {
  const dispatch = useDispatch();

  const [taskType, setTaskType] = useState(options[0]);
  const [activeEditTask, setActiveEditTask] = useState("");

  const list = useSelector((state: TRootState) => state.todos);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const displayList = React.useMemo(() => {
    const data = list?.data || [];
    switch (taskType.value) {
      case TASK_TYPE.DONE:
        return data.filter((task) => task.completed);

      case TASK_TYPE.UNDONE:
        return data.filter((task) => !task.completed);

      default:
        return data;
    }
  }, [list, taskType]);

  const onEditClick = React.useCallback(
    (id: string) => () => {
      setActiveEditTask(id);
    },
    [setActiveEditTask]
  );

  const onDeleteClick = React.useCallback(
    (id: string) => () => {
      console.log(id);
    },
    []
  );

  const onCompleteClick = React.useCallback(
    (task: ITask) => () => {
      console.log(task);
    },
    []
  );

  const onSaveClick = React.useCallback(
    (task: Partial<ITask>) => {
      console.log(task);
      if (!task.title) return;

      if (!task.id) {
        dispatch(createTodo(task.title));
      }
      setActiveEditTask("");
    },
    [setActiveEditTask]
  );

  return (
    <Wrapper>
      <Container>
        <ProgressBox success={3} total={5} />
        <ListWrapper>
          <ListTitleWrapper>
            <span>Tasks</span>
            <Select options={options} value={taskType} onChange={setTaskType} />
          </ListTitleWrapper>
          {displayList.map((task) =>
            activeEditTask === task.id ? (
              <TaskForm key={task.id} task={task} onSaveClick={onSaveClick} />
            ) : (
              <Task
                key={task.id}
                task={task}
                onEditClick={onEditClick(task.id)}
                onDeleteClick={onDeleteClick(task.id)}
                onCompleteClick={onCompleteClick(task)}
                showMenu={!activeEditTask}
              />
            )
          )}
          <TaskForm onSaveClick={onSaveClick} disabled={!!activeEditTask} />
        </ListWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
