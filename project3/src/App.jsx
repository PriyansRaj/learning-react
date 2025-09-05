import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  let arr = ["Pikachu", "Raichu", "Pichu"];
  return (
    <>
      <Card name="Priyans" pokemon={arr}></Card>
    </>
  );
}

export default App;
