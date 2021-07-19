import "./assets/css/App.css"
import './assets/css/index.css'
import ClassificacaoImc from './components/ClassificacaoImc';
import InfoMassa from "./components/InfoMassa";

function App() {
  return (
    <section className="sessao-principal">
      <InfoMassa />
      <ClassificacaoImc />
    </section>
  );
}

export default App;
