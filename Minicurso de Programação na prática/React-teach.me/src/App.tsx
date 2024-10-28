import { useState } from "react";
import { ItemSuggestion } from "./components/ItemSuggestion";

type ProgressType = "pending" | "started" | "done";
function App() {
  const [progress, setProgress] = useState<ProgressType>('started')
  
  return (
    <div className="container">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <ItemSuggestion title="HTML" />
          <ItemSuggestion title="CSS" />
          <ItemSuggestion title="JavaScript" />
          <ItemSuggestion title="TypeScript" />
        </details>

        <details open className="historic">
          <summary>Histórico</summary>
          <ItemSuggestion title="Python" />
          <ItemSuggestion title="Assembly" />
        </details>
      </div>

      <div className="content">
        {
          progress === "pending" && (
            <div className="box-home">
              <span>Olá, eu sou o</span>
              <h1>
                teach<span>.me</span>
              </h1>
              <p>
                Estou aqui para te ajudar nos seus estudos. Selecione um dos
                tópicos sugeridos ao lado ou digite um tópico que deseja estudar
                para começarmos
              </p>
            </div>
        )}

        {progress !== "pending" && (
          <div className="box-chat">
            <h1>
              Você está estudando sobre <span>HTML</span>
            </h1>

            <div className="question">
              <h2>
                <img src="./assets/question.svg" />
                Pergunta
              </h2>
              <p>
                claro aqui esta apergunta simulada como você descreveria o seu
                conhecimento e experiência com HTML? Você poderia fornecer um
                exemplo de um projeto em que utilizou HTML e como isso impactou
                positivamente o resultado final? Aguardo a sua resposta para
                poder fornecer um feedback!
              </p>
            </div>

            <div className="answer">
              <h2>Sua resposta</h2>
              <p>
                Tenho um conhecimento sólido em HTML, já construi vários sites
              </p>
            </div>

            <div className="feedback">
              <h2>
                Feedback teach<span>.me</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                porro voluptate consectetur, minus, illo quisquam ipsam fugit
                labore rerum dicta quo aspernatur amet beatae reprehenderit! Eos
                voluptas maxime alias natus.
              </p>
              <div className="actions">
                <button>Estudar novo tópico</button>
              </div>
            </div>
          </div>
        )}

        <div className="box-input">
          <textarea placeholder="Insira o tema que deseja estudar..."></textarea>
          <button type="submit">Enviar pergunta</button>
        </div>

        <footer className="box-footer">
          <p>
            teach<span>.me</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
