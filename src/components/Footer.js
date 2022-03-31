import Linkedin from "../images/Linkedin";
import Git from "../images/Git";
import Line from "../images/Line";
import { Link } from "react-router-dom";
const Footer = ({ title, onClick }) => {
  function open(url) {
    const win = window.open(url, "_blank");
    if (win != null) {
      win.focus();
    }
  }

  return (
    <div className="Footer">
      <div
        className="FooterLink"
        onClick={() => {
          open("https://www.linkedin.com/in/%C3%A2ngela-alves-0618bb173/");
        }}
      >
        <Linkedin />
      </div>
      <div
        className="FooterLink"
        onClick={() => {
          open("https://github.com/angelaalves");
        }}
      >
        <Git />
      </div>
      <Line />
    </div>
  );
};
export default Footer;
