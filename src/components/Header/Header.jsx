import { NavLink } from 'react-router-dom';
import s from './Headers.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigate}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tweets"
          className={({ isActive }) =>
            isActive ? `${s.navLink} ${s.active}` : s.navLink
          }
        >
          Tweets
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
