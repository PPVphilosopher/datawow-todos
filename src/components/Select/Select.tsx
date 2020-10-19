import React from "react";
import ReactSelect from "react-select";
import { ISelectOption } from "../../interfaces";
import { customStyle, Wrapper } from "./Select.style";

interface ISelectProps {
  options: ISelectOption[];
  value: ISelectOption;
  onChange: any;
}

const Select: React.FC<ISelectProps> = ({ options, value, onChange }) => (
  <Wrapper>
    <ReactSelect
      options={options}
      isSearchable={false}
      styles={customStyle}
      value={value}
      onChange={onChange}
    ></ReactSelect>
  </Wrapper>
);

export default Select;
