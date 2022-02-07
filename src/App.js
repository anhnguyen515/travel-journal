import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((card) => <Card key={card.id} data={card} />);
  return (
    <div className="App">
      <Navbar />
      <main className="card--container">{cards}</main>
    </div>
  );
}

export default App;
