import { Link } from "react-scroll";
import Logo from "../images/Logo";
const Header = ({}) => {
  const renderLink = (name, id) => {
    return (
      <Link
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        duration={500}
      >
        <h5 className="Identifier HeaderText"> {name}</h5>
      </Link>
    );
  };
  return (
    <div className="Header">
      <Logo />
      <div className="HeaderLinks">
        {renderLink("About Me", "about-me")}
        {renderLink("Work Experience", "work-xp")}
        {renderLink("Contacts", "contacts")}

        <button
          className="Button"
          onClick={() => {
            console.log("open email");
          }}
        >
          <text className="ButtonText">Hire Me</text>
        </button>
      </div>
    </div>
  );
};
export default Header;
