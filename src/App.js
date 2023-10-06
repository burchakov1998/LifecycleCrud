import "./App.css";
import "./main.css";
import "./components/Molecules/form/form.css"
import "./components/Molecules/loader/spinner.css"
import "./components/Sections/section.css"
import Panel from "./components/Panel";

const fakeData = { type: "notes-panel", text: "Добавить", name: "notes" };

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">CRUD</h2>
      </header>
      <main>
        <Panel {...fakeData}></Panel>
      </main>
    </div>
  );
}

export default App;
