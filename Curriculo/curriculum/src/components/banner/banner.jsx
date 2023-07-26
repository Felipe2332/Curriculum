
import styles from './banner.module.css'
import foto from '../imagens/fotoMinha.png';




export default function Banner()
{
    return (
        <div className={styles.container}>
            <img src={foto} className={styles.image} alt='' />
            <h3 className={styles.escrita}>Olá, meu nome é Luis Felipe Barbosa, tenho 24 anos e meu objetivo no setor da tecnologia é cada vez mais aprimorar meu conhecimento na área, enquanto busco um melhor entendimento das várias inovações presentes no mercado. Além disso, procuro aperfeiçoar meu relacionamento interpessoal. 
            Apesar da falta de experiência na área, sempre disposto a aprender algo novo e resolver problemas, mesmo sendo fora de minha zona de conforto. </h3>
        </div>
    )
}