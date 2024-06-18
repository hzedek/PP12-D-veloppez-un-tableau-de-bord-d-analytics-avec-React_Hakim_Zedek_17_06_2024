import "../styles/header.scss";
import logo from "../Assets/logo.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <p>Accueil</p>
        <p>Profil</p>
        <p>Réglage</p>
        <p>Communauté</p>
      </nav>
    </header>
  );
}

export default Header;
