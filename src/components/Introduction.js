import { useEffect, useState } from "react";

const Introduction = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    "fast deliver",
    "help you",
    "design components",
    "make reusable code",
    "go climbing",
    "drink cofee for a boost",
  ];
  useEffect(() => {
    setInterval(() => {
      setIndex((prevCount) => {
        return prevCount === phrases.length - 1 ? 0 : prevCount + 1;
      });
    }, 1500);
    return clearInterval();
  }, []);

  return (
    <div className="Introduction" id={"home"}>
      <text className="Title Pink">Alo, Ângela here!</text>
      <text className="Text IntroductionText">I'm a frontend developer</text>
      <text className="Text IntroductionText">
        You can count on me to
        <text className="Yellow"> {phrases[index]}</text>
      </text>
    </div>
  );
};
export default Introduction;
