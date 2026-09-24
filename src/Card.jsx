function Card({ title, description, price, image}) {
return (
   <div className="card">
     <img src={image} alt={title} />
     <h3>{title}</h3>
     <p>{description}</p>
     <span>{price} ₽</span>
     <button>В корзину</button>
   </div>
 );
}
export default Card;