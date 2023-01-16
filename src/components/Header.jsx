import "../App.css";
import ProfilePic from "../images/pic2.jpg";

export default function Header() {
  return (
    <nav className="nav">
      <img src={ProfilePic} />
    </nav>
  );
}
