import React from "react";
import { IoIosMore, IoMdCheckmark } from "react-icons/io";
import { IDropdownMenu, ITask } from "../../interfaces";
import { Checkbox, MenuButton, TitleText, Wrapper } from "./Task.style";
import { DropdownMenu } from "../DropdownMenu";
import { theme } from "../../styles";

interface ITaskProps {
  task: ITask;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onCompleteClick: () => void;
  disabled?: boolean;
}

const Task: React.FC<ITaskProps> = ({
  task,
  onEditClick,
  onDeleteClick,
  onCompleteClick,
  disabled,
}) => {
  const MenuList: IDropdownMenu[] = [
    { label: "Edit", onClick: onEditClick },
    { label: "Delete", onClick: onDeleteClick, color: theme.colors.pink },
  ];

  return (
    <Wrapper>
      <Checkbox
        completed={task.completed}
        onClick={onCompleteClick}
        disabled={disabled}
      >
        <IoMdCheckmark />
      </Checkbox>
      <TitleText completed={task.completed}>{task.title}</TitleText>
      {!disabled && (
        <MenuButton>
          <DropdownMenu menuList={MenuList}>
            <IoIosMore />
          </DropdownMenu>
        </MenuButton>
      )}
    </Wrapper>
  );
};

export default Task;
