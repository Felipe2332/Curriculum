
import styles from './contato.module.css'

import { Helmet } from 'react-helmet';

export default function Contato()
{
    const TITLE = 'Entre em contato';
    
    return(
        <>
        <Helmet>
    <title>{TITLE}</title>
    </Helmet>
        <div className={styles.container}>
            <div className={styles.estiloForm}>

            <h2>Deseja entrar em contato? Preencha os campos</h2>
            <form method="post" action="https://formspree.io/f/mrgvwylp">
            <div>
            <label >Nome:</label>
            </div>
            <input name="name" placeholder="Digite seu nome" />
            
            <div>
            <label>Seu E-mail:</label>
            </div>

            <input type="email" id="email" name="email"placeholder="emailexemplo@outlook.com"/>
            

            <div>
            <label>Sua mensagem:</label>
            </div>

            <textarea rows="8" maxlength="3000" id="texto" name="message" placeholder="Qual sua mensagem?" />

            <div className={styles.divbotaoEnviar}>
            <button type="submit" className={styles.botaoEnviar}>Enviar</button>
            </div>

        </form>

        </div>
        
        </div>
        </>
    )
}