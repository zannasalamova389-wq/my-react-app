import Card  from './Card';
import './App.css';
import espresso from './images/espresso.jpg';
import cappuccino from './images/cappuccino.jpg';
import latte from './images/latte.jpg';

function App() {
  return (
    <div>
      <h1>Наше меню</h1>
      <div className="cards">
        <Card title="Эспрессо" description="Крепкий и бодрящий" price={150} image={espresso} />
        <Card title="Капучино" description="С нежной молчной пенкой" price={200} image={cappuccino} />
        <Card title="Латте" description="Мягкий и сливочный" price={200} image={latte} />
      </div>
    </div>
  );
}
export default App;