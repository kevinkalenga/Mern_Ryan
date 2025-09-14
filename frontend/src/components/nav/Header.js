import { Menu } from "antd";
import { useState } from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const linkStyle = { textDecoration: "none" };

  const items = [
    {
      key: "home",
      icon: <AppstoreOutlined />,
      label: <Link to="/" style={linkStyle}>Home</Link>,
    },
    {
      key: "submenu",
      icon: <SettingOutlined />,
      label: "Username",
      children: [
        {
          key: "four",
          icon: <AppstoreOutlined />,
          label: <Link to="/four" style={linkStyle}>Navigation Four</Link>,
        },
        {
          key: "five",
          icon: <AppstoreOutlined />,
          label: <Link to="/five" style={linkStyle}>Navigation Five</Link>,
        },
      ],
    },
    {
      key: "register",
      icon: <UserAddOutlined />,
      label: <Link to="/register" style={linkStyle}>Register</Link>,
      className: "ml-auto",
    },
    {
      key: "login",
      icon: <UserOutlined />,
      label: <Link to="/login" style={linkStyle}>Login</Link>,
    },
  ];

  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      selectedKeys={[current]}
      items={items}
      style={{ display: "flex", flex: 1 }}
    />
  );
};

export default Header;

