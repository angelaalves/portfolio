const Button = ({ title, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      <text className="ButtonText"> {title}</text>
    </button>
  );
};
export default Button;
