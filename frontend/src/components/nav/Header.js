
import { Menu } from "antd";
import { useState } from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const {SubMenu, Item} = Menu
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      selectedKeys={[current]}
      style={{ display: "flex" }}
    >
      {/* Gauche */}
      <Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Item>

      <Menu.SubMenu key="SubMenu" title="Username" icon={<SettingOutlined />}>
        <Item key="four" icon={<AppstoreOutlined />}>
          Navigation Four
        </Item>
        <Item key="five" icon={<AppstoreOutlined />}>
          Navigation Five
        </Item>
      </Menu.SubMenu>

      {/* Droite → on pousse Register avec ml-auto */}
      <Item key="register" icon={<UserAddOutlined />} className="ml-auto">
        Register
      </Item>
      <Item key="login" icon={<UserOutlined />}>
        Login
      </Item>
    </Menu>
  );
};

export default Header;


