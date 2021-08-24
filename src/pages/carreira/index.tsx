import Head from "next/head";
import Link from "next/link";
import { FaAward, FaHeartbeat, FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";
import Mouse from "../../components/Mouse";

export default function Vagas() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pollux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <section className={styles.introVagas}>
          <div className={styles.texts}>
            <h1 className={styles.titleVagas}>
              Venha inovar os serviços <br />
              digitais com a gente
            </h1>
            <p className={styles.descriptionVagas}>
              Somos movidos a resolver problemas e criar soluções incríveis e
              inovadoras que ajudam pessoas no mundo todo. Se você quer gerar um
              impacto significativo e se divertir ao longo do caminho, nós
              adoraríamos conhecer você.
            </p>
          </div>
          <a href="#vagas" className={styles.button}>
            Vem pra Pollux
          </a>
          <Mouse />
        </section>
        <section id="vagas" className={styles.nossasVagas}>
          <h1 className={styles.tittleNossasVagas}>Nossas Vagas</h1>
          <div className={styles.content}>
            <Link href="/vagas/devPython">
              <button className={styles.itemNossasVagas}>Dev Python</button>
            </Link>
            {/* <Link href="/vagas/devRuby">
              <button className={styles.itemNossasVagas}>Dev Ruby</button>
            </Link> */}
            <Link href="/vagas/devJava">
              <button className={styles.itemNossasVagas}>Dev Java</button>
            </Link>
            <Link href="/vagas/devJS">
              <button className={styles.itemNossasVagas}>Dev JavaScript</button>
            </Link>

            {/* <button className={styles.itemNossasVagas}>Dev Golang</button> */}
            {/* <button className={styles.itemNossasVagas}>DevOps</button> */}
            <Link href="/vagas/devNET">
              <button className={styles.itemNossasVagas}>Dev .NET</button>
            </Link>
            <Link href="/vagas/techLead">
              <button className={styles.itemNossasVagas}>Tech Lead</button>
            </Link>
            <Link href="/vagas/devPHP">
              <button className={styles.itemNossasVagas}>Dev PHP</button>
            </Link>
            {/* <button className={styles.itemNossasVagas}>SRE</button>
            <button className={styles.itemNossasVagas}>
              Dev Flutter - Mobile
            </button> */}
            {/* <button className={styles.itemNossasVagas}>Dev React Native</button> */}
            {/* <button className={styles.itemNossasVagas}>Scrum Master</button> */}
            {/* <button className={styles.itemNossasVagas}>Product Owner</button> */}
            {/* <button className={styles.itemNossasVagas}>UX/UI</button> */}
            {/* <button className={styles.itemNossasVagas}>Full Stack</button> */}
            {/* <button className={styles.itemNossasVagas}>Front-end</button> */}
          </div>
          <Link href="/vagas/candidatura">
            <button className={styles.buttonTalentos}>Banco de talentos</button>
          </Link>
        </section>
        <section className={styles.naPollux}>
          <h1 className={styles.tittleNaPollux}>
            O que você encontra na Pollux
          </h1>
          <div className={styles.content}>
            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>
                  CULTURA DE FEEDBACKS
                </h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Acreditamos na troca de experiências! Para nós, todo o feedback
                é positivo, pois o intuito dele é sempre focado na evolução de
                cada um. Sempre ouvimos cada colaborador para construir cada vez
                um ambiente mais agradável para todos.
              </p>
            </div>

            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>PLANO DE CARREIRA</h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Nossa intenção é que você cresça! Aqui na Pollux nosso
                compromisso é com seu desenvolvimento. Você encontrará em nossa
                equipe, todo suporte necessário para crescer! Com a empresa em
                crescimento, oportunidades de crescimento não faltarão.
              </p>
            </div>
            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>TRABALHO REMOTO</h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Acreditamos em relações do trabalho baseadas em autonomia,
                propósito e confiança através do trabalho remoto. Por isso nossa
                equipe conta com profissionais de várias regiões do Brasil e
                mesmo distantes, estamos cada vez mais unidos.
              </p>
            </div>

            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>HORÁRIO FLEXÍVEL</h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Nossos horários são flexíveis de acordo com as suas necessidades
                e a do projeto. Queremos que você se sinta bem trabalhando com a
                gente!
              </p>
            </div>

            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>
                  EQUIPES DESCONTRAÍDAS
                </h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Trabalhamos muito para construir uma cultura divertida que todos
                pertencem e reconhecem as peculiaridades individuais que nos
                torna uma equipe autentica, buscando sempre aprender e crescer
                juntos.
              </p>
            </div>
            <div className={styles.itemNaPollux}>
              <div className={styles.titlleNaPollux}>
                <AiOutlineCheckCircle />
                <h3 className={styles.categotiaNaPollux}>
                  ESTRUTURA HORIZONTAL
                </h3>
              </div>
              <p className={styles.desciptionNaPollux}>
                Acreditamos que todos podem ensinar e aprender! Independente se
                for Tech lead, pleno ou júnior, estamos em constante crescimento
                e ninguém é superior.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.nossosBeneficios}>
          <h1 className={styles.tittleNossosBeneficios}>Nossos Benefícios</h1>
          <div className={styles.content}>
            <div className={styles.itemNossosBeneficios}>
              <FaAward />
              <h3 className={styles.categotiaBeneficios}>
                Para suas necessidades
              </h3>
              <ul className={styles.listaBeneficios}>
                <li className={styles.itemLista}>
                  Auxílio em aulas de Inglês, Espanhol
                </li>
                <li className={styles.itemLista}>Auxílio creche</li>
                <li className={styles.itemLista}>
                  Licença maternidade e paternidade estendidas
                </li>
                <li className={styles.itemLista}>Auxílio material escolar</li>
              </ul>
            </div>
            <div className={styles.itemNossosBeneficios}>
              <FaHeartbeat />
              <h3 className={styles.categotiaBeneficios}>
                Para o seu bem-estar
              </h3>
              <ul className={styles.listaBeneficios}>
                <li className={styles.itemLista}>Plano de saúde</li>
                <li className={styles.itemLista}>Plano odontológico</li>
                <li className={styles.itemLista}>Seguro de vida</li>
                <li className={styles.itemLista}>Zenklub (saúde mental)</li>
                <li className={styles.itemLista}>Gympass</li>
              </ul>
            </div>
            <div className={styles.itemNossosBeneficios}>
              <FaMoneyBillWave />
              <h3 className={styles.categotiaBeneficios}>Para o seu bolso</h3>
              <ul className={styles.listaBeneficios}>
                <li className={styles.itemLista}>Previdência Privada</li>
                <li className={styles.itemLista}>Vale refeição/alimentação</li>
                <li className={styles.itemLista}>
                  {" "}
                  Assessoria financeira, jurídica e psicológica para
                  funcionários
                </li>
                <li className={styles.itemLista}>13º e 14º salário</li>
                <li className={styles.itemLista}>
                  Remuneração variável anual (bônus) competitiva.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr className={styles.shadow} />
      </main>
    </div>
  );
}