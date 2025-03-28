import LogoKasa from '../assets/Kasa.png'
import { Link } from 'react-router'
import { NavLink } from 'react-router'

function Header(){

  function getNavLinkClass(props) {
    return props.isActive ? "navbar__link navbar__linkActive" : "navbar__link navbar__linkInactive";
  }
  
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={LogoKasa} alt="Logo Kasa"></img>
      </Link>

      <nav className="navbar">
        <NavLink to="/" className={getNavLinkClass}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={getNavLinkClass}>
          A propos
        </NavLink>      
      </nav>
    </div>
  )
}

export default Header

