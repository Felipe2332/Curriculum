
import styles from './banner.module.css'
import foto from '../imagens/fotoMinha.png';




export default function Banner()
{
    return (
        <div>
            <img src={foto} className={styles.image} alt='' />

            <h1 className={styles.teste}>Texto teste</h1>


        </div>
    )
}