
import styles from './navBar.module.css'

export default function NavBar()
{
    return(
        <nav className={styles.navBar}>
                <a href="" className={styles.links}>Home</a>
                <a href="" className={styles.links}>Contato</a>
        </nav>
    )
}