import "../styles/navVertical.scss";
import icon from "../Assets/icon.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import icon4 from "../Assets/icon4.png";

function NavVertical() {
  return (
    <div className="navVertical">
      <img src={icon} alt="icon" />
      <img src={icon2} alt="icon" />
      <img src={icon3} alt="icon" />
      <img src={icon4} alt="icon" />
    </div>
  );
}

export default NavVertical;
