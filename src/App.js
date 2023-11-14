import "./App.css";
import Ispisimena from "./Components/Ispisimena";
import Ispisnovi from "./Components/Ispisnovi";
import Simplelista from "./Components/Simplelista";

function App() {
  const imena = ["Marko", "Pero", "Iva", "Katarina", "Ana"];
  const klijenti = [
    { id: "f23", name: "Ivan", years: 30 },
    { id: "f25", name: "Ana", years: 25 },
  ];

  return (
    <div className="App">
      <Simplelista />
      <Ispisimena imena={imena} />
      <Ispisnovi imena={klijenti} />
    </div>
  );
}

export default App;

// 1. Unutar App komponente definirati listu od 5 polja s različitim imenima.
// 2. Proslijediti listu kao prop novoj komponenti po nazivom Ispisimena.jsx
// 3. unutar komponente Ispisimena.jsx ispisati elemente proslijeđene liste