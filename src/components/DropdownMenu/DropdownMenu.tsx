import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IDropdownMenu } from "../../interfaces";
import { MenuText, Wrapper } from "./DropdownMenu.style";

interface IDropdownMenuProps {
  children: React.ReactChild;
  menuList: IDropdownMenu[];
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({ children, menuList }) => (
  <Wrapper>
    <Dropdown alignRight>
      <Dropdown.Toggle>{children}</Dropdown.Toggle>
      <Dropdown.Menu>
        {menuList.map((menu) => (
          <Dropdown.Item key={menu.label} as="button" onClick={menu.onClick}>
            <MenuText color={menu.color}>{menu.label}</MenuText>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Wrapper>
);

export default DropdownMenu;
