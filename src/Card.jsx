function Card({ title, description, price, image,onAdd}) {
return (
<div className="card">
<img src={image} alt={title} />
<h3>{title}</h3>
<p>{description}</p>
<span>{price} ₽</span>
<button onClick={onAdd}>В корзину</button>
</div>
);
}
export default Card;