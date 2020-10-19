import styled from "@emotion/styled";
import { theme } from "../../styles";

interface IWrapperProps {
  disabled?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? theme.colors.container : theme.colors.white};
  border-radius: 22px;
  padding: ${theme.spacings(0.4)};
  padding-left: ${theme.spacings(2)};
  margin-top: ${theme.spacings(1.5)};
`;

export const TitleInput = styled.input`
  border: none;
  flex: 1;
  outline: none;
  background-color: transparent;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 36px;
  border-radius: 18px;
  border: none;
  outline: none !important;
  background-color: ${theme.colors.purple};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: normal;

  &:disabled {
    opacity: 0.5;
  }
`;
