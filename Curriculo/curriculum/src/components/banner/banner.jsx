
import styles from './banner.module.css'
import foto from '../imagens/fotoMinha.png';




export default function Banner()
{
    return (
        <div>
            <img src={foto} className={styles.image} alt='' />
            


        </div>
    )
}