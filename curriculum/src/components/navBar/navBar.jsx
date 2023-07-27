import styles from './navBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
