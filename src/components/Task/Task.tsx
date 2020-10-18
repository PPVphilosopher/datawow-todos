import React from "react";
import { IoIosMore, IoMdCheckmark } from "react-icons/io";
import { ITask } from "../../interfaces";
import { Checkbox, MenuButton, TitleText, Wrapper } from "./Task.style";

interface ITaskProps {
  task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox completed={task.completed}>
        <IoMdCheckmark />
      </Checkbox>
      <TitleText completed={task.completed}>{task.title}</TitleText>
      <MenuButton>
        <IoIosMore />
      </MenuButton>
    </Wrapper>
  );
};

export default Task;
