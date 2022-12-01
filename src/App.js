import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { Navigation } from "./components/Navigation";
import User from "./components/user";
import UserClass from "./components/UserClass";

function App() {
  return (
    <div className="App">
      <Navigation />
      <User name={"Bianca"} age={26} gender={"feminin"} address={"Timisoara"} />
      <User name={"Ion"} age={20} gender={"masculin"} address={"Bucuresti"} />
      <User name={"Ana"} age={30} gender={"feminin"} address="Cluj" />
    </div>
  );
}

export default App;
