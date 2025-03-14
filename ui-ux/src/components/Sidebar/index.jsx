import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Images from "../../assets/images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Images.logoS} alt="logo" />
        <img className="sub-logo" src={Images.logoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel="noreferrer" href=""></a>
            <FontAwesomeIcon icon={faLinkedin}/>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href=""></a>
            <FontAwesomeIcon icon={faGithub}/>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href=""></a>
            <FontAwesomeIcon icon={faXTwitter}/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
