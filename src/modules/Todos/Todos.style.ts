import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;

  @media ${theme.breakpoints.tablet} {
    padding: ${theme.spacings(5, 0)};
  }
`;

export const Container = styled.div`
  background-color: ${theme.colors.container};
  width: 100%;
  flex: 1;
  padding: ${theme.spacings(6)};

  @media ${theme.breakpoints.tablet} {
    border-radius: 20px;
    height: auto;
    width: 80%;
    max-width: 720px;
  }

  @media ${theme.breakpoints.laptop} {
    border-radius: 20px;
    height: auto;
    width: 80%;
    max-width: 720px;
    padding: ${theme.spacings(6, 10)};
  }
`;

export const ListWrapper = styled.div``;

export const ListTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spacings(3)};
  font-size: 24px;
  font-weight: 500;
`;
