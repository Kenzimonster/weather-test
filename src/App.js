import CitySearch from "./CitySearch";
import Footer from "./Footer";
import './App.css';

function App() {
return (
    <div className="App">
      <section className="messageBoard">
        <h1> Goblin Weather Teller</h1>
        <CitySearch />
      </section>
      <Footer/ >
    </div>
  );
}

export default App;
