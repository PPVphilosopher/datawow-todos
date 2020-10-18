import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: ${theme.colors.pink};
  padding: ${theme.spacings(2)};
`;

export const TitleText = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${theme.colors.white};
`;

export const ProgressWrapper = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.progressBackground};
  margin: ${theme.spacings(1, 0)};
`;

interface IProgressingBarProps {
  width: number;
}

export const ProgressingBar = styled.div<IProgressingBarProps>`
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.progressBar};
  width: ${(props) => `${props.width}%`};
`;

export const CountText = styled.div`
  font-size: 16px;
  color: ${theme.colors.textProgress};
`;
