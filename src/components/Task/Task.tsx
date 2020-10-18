import React from "react";
import { IoIosMore, IoMdCheckmark } from "react-icons/io";
import { IDropdownMenu, ITask } from "../../interfaces";
import { Checkbox, MenuButton, TitleText, Wrapper } from "./Task.style";
import { DropdownMenu } from "../DropdownMenu";
import { theme } from "../../styles";

interface ITaskProps {
  task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  const onEditClick = React.useCallback(() => {}, [task]);

  const onDeleteClick = React.useCallback(() => {}, [task]);

  const MenuList: IDropdownMenu[] = [
    { label: "Edit", onClick: onEditClick },
    { label: "Delete", onClick: onDeleteClick, color: theme.colors.pink },
  ];

  return (
    <Wrapper>
      <Checkbox completed={task.completed}>
        <IoMdCheckmark />
      </Checkbox>
      <TitleText completed={task.completed}>{task.title}</TitleText>
      <MenuButton>
        <DropdownMenu menuList={MenuList}>
          <IoIosMore />
        </DropdownMenu>
      </MenuButton>
    </Wrapper>
  );
};

export default Task;
