import "./Header.css";

//!  Great to add logged guest name belwo
const Header = () => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Welcome to CragsList!</p>
          <p className="subtitle">
            Show off your climbing achievements in this community.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
