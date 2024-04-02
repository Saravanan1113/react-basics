import reactImages from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getrandom(m) {
  return Math.floor(Math.random() * (m + 1));
}

export default function Header() {
  return (
    <>
      <header>
        <img src={reactImages} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getrandom(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
    </>
  );
}
