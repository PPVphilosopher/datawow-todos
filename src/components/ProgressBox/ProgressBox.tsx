import React from "react";
import {
  CountText,
  ProgressingBar,
  ProgressWrapper,
  TitleText,
  Wrapper,
} from "./ProgressBox.style";

interface IProgressBoxProps {
  success: number;
  total: number;
}

const ProgressBox: React.FC<IProgressBoxProps> = ({ success, total }) => (
  <Wrapper>
    <TitleText>Progress</TitleText>
    <ProgressWrapper>
      <ProgressingBar width={(success * 100) / (total || 1)} />
    </ProgressWrapper>
    <CountText>{success} completed</CountText>
  </Wrapper>
);

export default ProgressBox;
