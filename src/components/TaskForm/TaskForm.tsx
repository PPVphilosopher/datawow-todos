import React from "react";
import { ITask } from "../../interfaces";
import { SaveButton, TitleInput, Wrapper } from "./TaskForm.style";

interface ITaskFormProps {
  task?: ITask;
  onSaveClick: (task: Partial<ITask>) => void;
  disabled?: boolean;
}

const TaskForm: React.FC<ITaskFormProps> = ({
  task,
  onSaveClick,
  disabled,
}) => {
  const [title, setTitle] = React.useState(task?.title || "");

  const onInputChange = React.useCallback(
    (e: any) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  const handleSaveClick = React.useCallback(() => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const updatedTask: Partial<ITask> = {
      ...(task || {}),
      title: trimmedTitle,
    };

    onSaveClick(updatedTask);
    setTitle("");
  }, [task, title, onSaveClick, setTitle]);

  return (
    <Wrapper disabled={disabled}>
      <TitleInput
        value={title}
        onChange={onInputChange}
        placeholder={task ? task.title : "Add your todo..."}
        disabled={disabled}
      />
      <SaveButton onClick={handleSaveClick} disabled={disabled}>
        Save
      </SaveButton>
    </Wrapper>
  );
};

export default TaskForm;
