import styled from "@emotion/styled";
import { theme } from "../../styles";

export const Wrapper = styled.div`
  width: 110px;
`;

// custom plugin style
export const customStyle = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (styles: any) => ({
    ...styles,
    height: "30px",
    minHeight: "30px",
    borderRadius: "10px",
    fontSize: "14px",
    color: theme.colors.black,
    border: "none",
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    marginTop: "-5px",
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    marginTop: "-3px",
    color: theme.colors.black,
  }),
  input: (styles: any) => ({ ...styles, padding: 0 }),
  menu: (styles: any) => ({
    ...styles,
    padding: "10px 6px",
    borderRadius: "10px",
    fontSize: "14px",
    border: "none",
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    borderRadius: "8px",
    height: "30px",
    paddingTop: "7px",
    backgroundColor: state.isSelected
      ? theme.colors.purple
      : state.isFocused
      ? `${theme.colors.purple}7F`
      : "transparent",
    color:
      state.isSelected || state.isFocused
        ? theme.colors.white
        : theme.colors.black,
  }),
};
