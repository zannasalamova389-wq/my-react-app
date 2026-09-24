import Card  from './Card';
import './App.css';
function App() {
  return (
    <div>
      <h1>Наше меню</h1>
      <div className="cards">
        <Card title="Эспрессо" description="Крепкий и бодрящий" price={150} image="https://via.placeholder.com/200×150" />
        <Card title="Капучино" description="С нежной молчной пенкой" price={200} image="https://via.placeholder.com/200×150" />
        <Card title="Латте" description="Мягкий и сливочный" price={200} image="https://via.placeholder.com/200×150" />
      </div>
    </div>
  );
}
export default App;