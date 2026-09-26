import { useState } from 'react';
import Card from './Card';
import './App.css';
import espresso from './images/espresso.jpg';
import cappuccino from './images/cappuccino.jpg';
import latte from './images/latte.jpg';
function App() {
const [cartCount, setCartCount] = useState(0);
function addToCart() {
setCartCount(cartCount + 1);
}
return (
<div>
<header className="header">
<p className="cart-info">🛒 Товаров в корзине: {cartCount}</p>
</header>
<div className="cards">
<Card totle="Эспрессо" description="Крепкий и бодрящий" price={150} image={espresso} onAdd={addToCart} />
<Card title="Капучино" description="С нежной молочной пенкой" price={200} image={cappuccino} onAdd={addToCart} />
<Card title="Латте" description="Мягкий и сливочный" price={200} image={latte} onAdd={addToCart} />
</div>
</div>
);
}
export default App;