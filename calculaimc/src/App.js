import "./assets/css/App.css"
import './assets/css/index.css'
import ClassificacaoImc from './components/ClassificacaoImc';
import Form from "./components/Form";
import InfoMassa from "./components/InfoMassa";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main>
      <NavBar />
      <section className="sessao-principal">
      <InfoMassa />
      <Form />
      <ClassificacaoImc />
    </section>
    </main>
    
  );
}

export default App;
