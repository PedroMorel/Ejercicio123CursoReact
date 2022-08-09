import logo from './logo.svg';
import './App.css';
import ContactoListComponent from './components/container/contactoA';
  //  import ContactoComponent from './components/pure/contactoA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoListComponent></ContactoListComponent>
        {/* <ContactoComponent></ContactoComponent> */}

      </header>
    </div>
  );
}

export default App;
