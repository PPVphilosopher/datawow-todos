import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProgressBox, Select, Task, TaskForm } from "../../components";
import { TASK_TYPE } from "../../constants";
import { ISelectOption, ITask } from "../../interfaces";
import {
  createTodo,
  deleteTodo,
  fetchTodos,
  TRootState,
  updateTodo,
} from "../../redux";
import {
  Container,
  ListTitleWrapper,
  ListWrapper,
  Wrapper,
} from "./Todos.style";

const options: ISelectOption<TASK_TYPE>[] = [
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

  React.useEffect(() => {
    if (!list.isLoading && list.error) {
      // TODO: update alert box when get design
      alert(list.error.message);
    }
  }, [list]);

  const displayList: Record<TASK_TYPE, ITask[]> = React.useMemo(() => {
    const data = list?.data || [];
    return {
      [TASK_TYPE.ALL]: data,
      [TASK_TYPE.DONE]: data.filter((task) => task.completed),
      [TASK_TYPE.UNDONE]: data.filter((task) => !task.completed),
    };
  }, [list]);

  const onEditClick = React.useCallback(
    (id: string) => () => {
      setActiveEditTask(id);
    },
    [setActiveEditTask]
  );

  const onDeleteClick = React.useCallback(
    (id: string) => () => {
      // TODO: update confirm box when get design
      const result = window.confirm("Delete this task?");
      if (result) {
        dispatch(deleteTodo(id));
      }
    },
    [dispatch]
  );

  const onCompleteClick = React.useCallback(
    (task: ITask) => () => {
      dispatch(
        updateTodo({
          ...task,
          completed: !task.completed,
        })
      );
    },
    [dispatch]
  );

  const onSaveClick = React.useCallback(
    (task: Partial<ITask>) => {
      if (!task.title) return;

      if (task.id) {
        dispatch(updateTodo(task as ITask));
      } else {
        dispatch(createTodo(task.title));
      }

      setActiveEditTask("");
    },
    [dispatch, setActiveEditTask]
  );

  return (
    <Wrapper>
      <Container>
        <ProgressBox
          success={displayList[TASK_TYPE.DONE].length}
          total={displayList[TASK_TYPE.ALL].length}
        />
        <ListWrapper>
          <ListTitleWrapper>
            <span>Tasks</span>
            <Select options={options} value={taskType} onChange={setTaskType} />
          </ListTitleWrapper>
          {displayList[taskType.value].map((task) =>
            activeEditTask === task.id ? (
              <TaskForm
                key={task.id}
                task={task}
                onSaveClick={onSaveClick}
                disabled={list.isLoading}
              />
            ) : (
              <Task
                key={task.id}
                task={task}
                onEditClick={onEditClick(task.id)}
                onDeleteClick={onDeleteClick(task.id)}
                onCompleteClick={onCompleteClick(task)}
                disabled={!!activeEditTask || list.isLoading}
              />
            )
          )}
          <TaskForm
            onSaveClick={onSaveClick}
            disabled={!!activeEditTask || list.isLoading}
          />
        </ListWrapper>
      </Container>
    </Wrapper>
  );
};

export default Todos;
