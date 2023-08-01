
import styles from './additional.module.css'


export default function Additional()
{
    return(
        <div className={styles.container}>
            <div className={styles.box1}>
            <h1>Informações complementares </h1>
            <p>Prestei serviço militar obrigatório em 2018. Aprimorei minhas habilidades de comunicação, trabalho em equipe, responsabilidade, disciplina e pontualidade. Recebi certificado de Honra ao Mérito e Referência Elogiosa por parte do Sargento. Além disso, fui qualificado como 3° melhor Cabo no Curso de Formação de Cabos 

            Facilidade em fazer o uso de tecnologias. Ativo socialmente. Gosto de ensinar o próximo. Já participei da Fatec Portas Abertas, onde eu e meu grupo apresentamos um aplicativo Mobile desenvolvido em Java utilizando o Android Studio. Na faculdade, utilizo com frequência a linguagem C. Além disso, se necessário, possuo veículo próprio. </p>
            </div>

            <div className={styles.box1}>

            <h1>Experiência profissional </h1>
            <h4> R. FERREIRA DA SILVA BARBOSA – SEGURANÇA</h4>
            <h4>Auxiliar Administrativo (2016 – 2023)</h4>
            <p>
            Funções: Responsável pela emissão de boletos e notas fiscais mensais, organização do escritório, pagamento de funcionários, controle de escalas e emissão de recibos de pagamento. 
            </p>

            <h4>AUTÔNOMO NA ÁREA DE REPARO E FORMATAÇÃO DE COMPUTADORES (2021 – 2023) </h4>
            <p>
            Funções: aceito serviços rápidos de consertos de computadores, notebooks principalmente. Abro o dispositivo, faço limpeza, instalo peças. Faço formatação do sistema se necessário. 
            </p>
            </div>
            <br />
            <br />
            <br />
            
        </div>
    )
}