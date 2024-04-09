// !assets
import { logo } from "../assets";

// !styles
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="" className={styles.navbarLogo} />
      <div id={styles.navlinks}>
        <a href="#section2">Emotions</a>
        <a href="#section4">Manifesto</a>
        <a href="#section6">Self-awareness test</a>
        <a href="#section8">Work with us</a>
      </div>
      <button className={styles.navbarButton}>Download app</button>
    </nav>
  );
};

export default Navbar;
