import "../App.css";
import BtnLinkedin from "../images/btn-linkedin.png";
import BtnMail from "../images/btn-mail.png";

export default function MainContent() {
  return (
    <div className="main--content">
      <h1 className="main--name">Alexandros Bernet</h1>
      <h4 className="main--job">Frontend Developer</h4>
      <h4 className="main--website">k4.nameis.bond</h4>
      <div className="btns-div">
        <a
          className="btns btns-mail"
          target="_blank"
          href="mailto:k4ilebi@gmail.com"
        >
          <i class="fa-solid fa-envelope"></i>
          <span className="btns-txt">Email</span>
        </a>
        <a
          className="btns btns-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/alexandros-bernet-789993174/"
        >
          <i class="fa-brands fa-linkedin"></i>
          <span className="btns-txt">LinkedIn</span>
        </a>
      </div>
      <h2 className="desc-title">About</h2>
      <p className="desc-p">
        I am a self-motivated individual with a diverse skill set, developed
        through various personal and professional experiences. Currently on my
        way to becoming a self-taught frontend developer in my 30s. I am
        addicted to automating daily tasks even if I have to walk the extra
        mile.
      </p>
      <h2 className="desc-title">Interests</h2>
      <p className="desc-p">
        Open-Minded, Music Lover, Pet Father, Meme Enjoyer, Self Development
        Freak, Automation Maniac, Gamer.
      </p>
    </div>
  );
}
