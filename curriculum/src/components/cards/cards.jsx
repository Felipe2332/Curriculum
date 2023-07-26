
import styles from './cards.module.css'


export default function Cards()
{
    return(
        <div className={styles.container}>
            <div className={styles.box1}>

            <h1 className={styles.escrita}>Conhecimentos </h1>
            <h3 className={styles.escrita}>Linguagens de programação: Java, JavaScript, C, SQL. </h3>

                <h3 className={styles.escrita}>Tecnologias e ferramentas: HTML5, CSS3, GitHub, Office 365, Linux, Android Studio. </h3>

                <h3 className={styles.escrita}>Idiomas: Inglês – Nível avançado (leitura, escrita e conversação). C2 Proficient EF Standard English Test Certificate 2023. <a href="https://www.efset.org/cert/XupBdu">(Link do certificado)</a></h3>

            </div>

                <div className={styles.box2}>
                    <h1 className={styles.escrita}>Projetos em destaque </h1>
                    <h3 className={styles.escrita}> <a href="https://felipe2332.github.io/eliteempresa.github.io/" target="_blank" rel="noopener noreferrer">Site Institucional para a empresa Elite Segurança</a> </h3>

                    <p className={styles.escrita}>Criação e implementação de um site informativo e atraente para promover os serviços da empresa. Utilização de HTML5, CSS3 e Formspree para desenvolver a interface interativa do site. Conversei com meu superior para colocar o site no ar oficialmente, porém não chegamos a um acordo. </p>

                    
                    <h3 className={styles.escrita}> <a href="https://felipe2332.github.io/Projeto" target="_blank" rel="noopener noreferrer">Site Pessoal de Reviews e Recomendações de Filmes</a></h3>

                    <p className={styles.escrita}>Criação de um site pessoal estilo blog para compartilhar opiniões, reviews e recomendações de filmes. Utilização de HTML5, CSS3 para criar um design atraente e responsivo. Ultimamente tem sido uma plataforma para expressar meus interesses, desenvolver minhas habilidades de redação e desenvolvimento web. </p>          
                </div>

                <div className={styles.box3}>
                <h1 className={styles.escrita}>Formação acadêmica </h1>

                <p className={styles.escrita}>Cursando: 5° período do tecnólogo em Análise e Desenvolvimento de Sistemas em Fatec Americana – Faculdade de Tecnologia de Americana (06/2021 – 06/2024). </p>

                <h1 className={styles.escrita}>Cursos</h1>
                <h3 className={styles.escrita}>Google Cloud Computing Foundations – (08/2022) – Duração de 64 horas.</h3>
                <p className={styles.escrita}> Utilizando a plataforma oficial da Google, aprendi a criar Máquinas virtuais e empregar o uso “cloud shell” para alocar recursos na nuvem, tudo de forma remota. </p>
                <h3 className={styles.escrita}> Arduíno em Linguagem C++ (06/2022) – Duração de 09 horas.</h3>
                <p className={styles.escrita}>Utilizando a plataforma TinkerCad para aprender o básico da linguagem C++ e entender um pouco sobre sistemas embarcados. </p>
                </div>
        </div>
    )
}