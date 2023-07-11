import logo from 'assets/logo_saal.svg';
import { MenuOutlined } from '@ant-design/icons';
import './header.scss';
import { Menu } from 'antd';
import { useState } from 'react';
import { useTabContext } from 'context/tab.context';
import { Tab } from 'types/types';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { setCurrentTab } = useTabContext();

  const onClickTab = (tab: Tab) => {
    setCurrentTab(tab);
  };

  const items = [
    { label: 'Office Tech & Supplies', key: 'supplies' },
    { label: 'Office Personnel', key: 'personnel' },
  ];
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <MenuOutlined
          className="menu-icon"
          onClick={() => setVisible(!visible)}
        />
        {visible && (
          <div className="menu-container">
            <Menu
              mode="vertical"
              forceSubMenuRender={false}
              onClick={(data) => onClickTab(data.key as Tab)}
              className="menu"
              items={items}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
