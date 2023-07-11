import logo from 'assets/logo_saal.svg';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
