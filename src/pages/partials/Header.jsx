import React from "react";
import { Menu, Typography, Input } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Header = () => {
  const { Item } = Menu;
  const { Text } = Typography;
  const { Search } = Input;
  const menuAnchors = ["home", "shoes", "clothes", "accessories"];
  const icons = [
    <SearchOutlined />,
    <HeartOutlined />,
    <UserOutlined />,
    <ShoppingCartOutlined />,
  ];

  return (
    <Menu mode="horizontal">
      {menuAnchors.map((anchor, index) => (
        <Item>
          <Text style={{ textTransform: "capitalize" }} >{anchor}</Text>
        </Item>
      ))}
     
     <SearchOutlined twoToneColor/>
    <HeartOutlined />
    <UserOutlined />
    <ShoppingCartOutlined />
      {/* <Search size='middle' placeholder="input search text" onSearch={()=>alert('')} enterButton /> */}
    </Menu>
  );
};

export default Header;
