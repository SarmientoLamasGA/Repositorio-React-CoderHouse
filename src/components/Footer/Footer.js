import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="imgSection">
          <h3>Seguinos en otras redes:</h3>
          <div className="logos">
            <img
              src="https://cdn.worldvectorlogo.com/logos/facebook-icon-1.svg"
              alt="Facebook logo"
            ></img>
            <img
              src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg"
              alt="Instagram logo"
            ></img>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <h3>© 2021 Random Shop</h3>
        <h4>By Gabriel Sarmiento Lamas</h4>
      </div>
    </footer>
  );
}

export default Footer;
