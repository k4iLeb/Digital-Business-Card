import "../App.css";
import FacebookLogo from "../images/Facebook Icon.png";
import GitHubLogo from "../images/GitHub Icon.png";
import InstagramLogo from "../images/Instagram Icon.png";
import TwitterLogo from "../images/Twitter Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://twitter.com/K4iLeb_"
        className="twitter-a"
        target="_blank"
      >
        <img src={TwitterLogo} />
      </a>
      <a
        href="https://www.facebook.com/k4ileb/"
        className="facebook-a"
        target="_blank"
      >
        <img src={FacebookLogo} />
      </a>
      <a
        href="https://www.instagram.com/k4ileb/"
        className="insta-a"
        target="_blank"
      >
        <img src={InstagramLogo} />
      </a>
      <a href="https://github.com/k4iLeb" className="github-a" target="_blank">
        <img src={GitHubLogo} />
      </a>
    </div>
  );
}
