import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 22px;
  padding: ${theme.spacings(1, 2)};
  margin-top: ${theme.spacings(1.5)};
`;

interface ITaskCompleteProps {
  completed: boolean;
  disabled?: boolean;
}

export const Checkbox = styled.div<ITaskCompleteProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.colors.purple};
  border-radius: 6px;
  margin-right: ${theme.spacings(1.5)};
  background-color: ${(props) =>
    props.completed ? theme.colors.purple : theme.colors.white};
  color: ${theme.colors.white};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const TitleText = styled.div<ITaskCompleteProps>`
  color: ${(props) =>
    props.completed ? theme.colors.textDisable : theme.colors.textDark};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export const MenuButton = styled.div`
  margin-left: auto;
  cursor: pointer;
  color: ${theme.colors.menuIcon};
  font-size: 20px;
`;
