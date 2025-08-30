import { Menu } from 'antd';
import { useState } from 'react';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const Header = () => {
  
  const {SubMenu} = Menu
  const [current, setCurrent] = useState('');
  
  const handleClick = () => {

  }

return (
 <Menu onClick={handleClick} mode="horizontal" defaultSelectedKeys={[current]}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Home
    </Menu.Item>
    <Menu.SubMenu key="SubMenu" title="Register" icon={<SettingOutlined />}>
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
          Navigation Four
        </Menu.Item>
        <Menu.Item key="five" icon={<AppstoreOutlined />}>
          Navigation Five
        </Menu.Item>
    </Menu.SubMenu>
  </Menu>
  )
}

export default Header