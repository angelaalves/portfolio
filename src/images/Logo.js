import { Link } from "react-scroll";
const Logo = () => {
  return (
    <div className="Logo">
      <Link
        activeClass="active"
        to={"home"}
        spy={true}
        smooth={true}
        duration={500}
      >
        <svg
          id="Logo"
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="110"
          viewBox="0 0 77 141"
        >
          <text
            id="A"
            transform="translate(0 70)"
            fill="#85a59d"
            font-size="80"
            font-family="Megrim"
          >
            <tspan x="0" y="0">
              A
            </tspan>
          </text>
          <text
            id="A-2"
            data-name="A"
            transform="translate(44 71) rotate(180)"
            fill="#85a59d"
            font-size="80"
            font-family="Megrim"
          >
            <tspan x="0" y="0">
              A
            </tspan>
          </text>
          <text
            id="P"
            transform="translate(33 70)"
            fill="#85a59d"
            font-size="80"
            font-family="Megrim"
          >
            <tspan x="0" y="0">
              P
            </tspan>
          </text>
          <text
            id="F"
            transform="translate(33 113)"
            fill="#85a59d"
            font-size="80"
            font-family="Megrim"
          >
            <tspan x="0" y="0">
              F
            </tspan>
          </text>
        </svg>
      </Link>
    </div>
  );
};
export default Logo;
