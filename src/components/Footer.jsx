import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>CragsList</strong> by{" "}
            <a href="https://github.com/imcbee/GA-Capstone-Project-CragsList-Front-end/blob/main/README.md">
              Ian McBee
            </a>
            . The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
