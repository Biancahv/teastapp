import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { Navigation } from "./components/Navigation";
import UserClass from "./components/UserClass";
import User from "./components/use";

function App() {
  return (
    <div className="App">
      <Navigation />
      <UserClass nume="XAA-12" varsta={20} />
      <User nume="Vasile" varsta={20} />
      <User
        nume="Ana"
        varsta={23}
        sex="feminin"
        address={{ strada: "principala", oras: "Timisoara" }}
      />
    </div>
  );
}

export default App;
