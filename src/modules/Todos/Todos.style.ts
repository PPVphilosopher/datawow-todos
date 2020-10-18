import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: ${theme.spacings(5, 0)};
`;

export const Container = styled.div`
  background-color: ${theme.colors.container};
  border-radius: 20px;

  width: 720px; // desktop
  padding: ${theme.spacings(6, 10)};
`;
