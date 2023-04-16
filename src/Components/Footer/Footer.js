import "./Footer.scss";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>
            O' Slot <BiCopyright />{" "}
          </h1>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
