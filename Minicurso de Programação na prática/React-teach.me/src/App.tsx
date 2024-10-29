import { useState } from "react";
import { ItemSuggestion } from "./components/ItemSuggestion";
import { getHistoric, setHistoric } from "./storage/historic";
import { sendMessage } from "./api/openai";

type ProgressType = "pending" | "started" | "done";

type Message = {
  role: "user" | "assistant";
  content: string;
  subject?: string
};



function App() {
  const [progress, setProgress] = useState<ProgressType>('pending')
  const [textarea, setTextarea] = useState<string>('')
  const [chat, setChat] = useState<Message[]>([])

  function resetChat(){
    setProgress('pending')
    setChat([])
  } 

  async function handleSubmitChat() {
    if (!textarea) {
      return
    }

    const message = textarea
    setTextarea('')

    if (progress === "pending") {
      setHistoric(message)

      const prompt = `gere uma pergunte onde simule uma entrevista de emprego sobre ${message},
      após gerar a perguinta, enviarei a resposta e voc6e me dará um feedback.
      O feedback precisa ser simples e objetivo e corresponder fielmente a resposta enviada.
      Após o feedback não existirá mais interação.`

      const messageGPT: Message = {
        role: 'user',
        content: prompt,
        subject: message
      } 

      
      setChat(text => [...text, messageGPT])

      const questionGPT: Message = await sendMessage([messageGPT])

      setChat((text) => [
        ...text,
        {
          role: "assistant",
          content: questionGPT.content,
        },
      ]);
    
      
      setProgress("started")
      return
    }

    const responseUser: Message = {
      role: "user",
      content: message,
    };
    
    
    const feedbackGPT: Message = await sendMessage([...chat, responseUser]);

    setChat((text) => [...text, responseUser]);
  
    setChat(text => [
      ...text,
      {
        role: "assistant",
        content: feedbackGPT.content
      },
    ]);


    setProgress("done")


  }



  
  return (
    <div className="container">
      <div className="sidebar">
        <details open className="suggestion">
          <summary>Tópicos Sugeridos</summary>
          <ItemSuggestion title="HTML" onClick={() => setTextarea("HTML")} />
          <ItemSuggestion title="CSS" onClick={() => setTextarea("CSS")} />
          <ItemSuggestion
            title="JavaScript"
            onClick={() => setTextarea("JavaScript")}
          />
          <ItemSuggestion
            title="TypeScript"
            onClick={() => setTextarea("TypeScript")}
          />
        </details>

        <details open className="historic">
          <summary>Histórico</summary>
          {
            getHistoric().map(item => (
            <ItemSuggestion
              title={item}
              onClick={() => setTextarea(item)}
            />
          ))}

        </details>
      </div>

      <div className="content">
        {progress === "pending" && (
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
            {chat[0] && (
              <h1>
                Você está estudando sobre <span>{chat[0].subject}</span>
              </h1>
            )}

            {chat[1] && (
              <div className="question">
                <h2>
                  <img src="./assets/question.svg" />
                  Pergunta
                </h2>
                <p>{chat[1].content}</p>
              </div>
            )}

            {chat[2] && (
              <div className="answer">
                <h2>Sua resposta</h2>
                <p>{chat[2].content}</p>
              </div>
            )}

            {chat[3] && (
              <div className="feedback">
                <h2>
                  Feedback teach<span>.me</span>
                </h2>
                <p>{chat[3].content}</p>
                <div className="actions">
                  <button onClick={resetChat}>Estudar novo tópico</button>
                </div>
              </div>
            )}
          </div>
        )}

        {progress !== "done" && (
          <div className="box-input">
            <textarea
              value={textarea}
              onChange={(element) => setTextarea(element.target.value)}
              placeholder={
                progress === "started"
                  ? "Insira sua resposta"
                  : "Insira o tema que deseja estudar..."
              }
            ></textarea>
            <button onClick={handleSubmitChat}>
              {progress === "pending" ? "Enviar pergunta" : "Enviar resposta"}
            </button>
          </div>
        )}

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
