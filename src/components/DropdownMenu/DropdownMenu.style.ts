import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  .dropdown-toggle {
    display: flex;
    padding: 0;
    background-color: transparent !important;
    border: none !important;
    color: inherit !important;
    box-shadow: none !important;

    &:after {
      content: none;
    }
  }

  .dropdown-menu {
    min-width: 110px;
    border-radius: 10px;
    padding: ${theme.spacings(1)};
  }

  .dropdown-item {
    display: flex;
    background-color: transparent;
    padding: 0;

    &:hover,
    &:active,
    &:visited,
    &:focus,
    &:focus-within {
      border: none !important;
    }
  }
`;

interface IMenuTextProps {
  color?: string;
}

export const MenuText = styled.div`
  width: 100%;
  padding: ${theme.spacings(0.5, 1)};
  border-radius: 8px;
  color: ${(props) => props.color || theme.colors.textDark};

  &:hover {
    background-color: ${`${theme.colors.purple}7F`};
    color: ${theme.colors.white};
  }
`;
