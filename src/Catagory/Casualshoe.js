import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const shoesData = [
  { id: 1, name: 'Casual Shoes', price: 299, image: '/Mensmodels/casualshoe2.png' },
  { id: 1, name: 'Casual  Shoes', price: 299, image: '/Mensmodels/casualshoe3.png' },
  { id: 1, name: 'Casual Shoes', price: 299, image: '/Mensmodels/casualshoe4.png' },
  { id: 1, name: 'Casual  Shoes', price: 299, image: '/Mensmodels/casualshoe5.png' },
  { id: 1, name: 'Casual  Shoes', price: 299, image: '/Mensmodels/casualshoe6.png' },
  { id: 1, name: 'Casual  Shoes', price: 299, image: '/Mensmodels/casualshoe7.png' },
  { id: 1, name: 'Casual Shoes', price: 299, image: '/Mensmodels/casualshoe8.png' },
  { id: 1, name: 'Casual Shoes', price: 299, image: '/Mensmodels/casualshoe9.png' },
  { id: 1, name: 'Casual Shoes', price: 299, image: '/Mensmodels/casualshoe10.png' },


 
];
const App = () => 
{
const [cart, setCart] = useState([]);
 const addToCart = (shoe) => {  setCart([...cart, shoe]);
};
return (
<div className="App">
 <h1>ShoeMart</h1>
 <div className="shoe-container">
  {shoesData.map((shoe) => (
 <div key={shoe.id} className="shoe-card">
 <img src={shoe.image} alt={shoe.name} />
  <h3>{shoe.name}</h3>
 <p>${shoe.price.toFixed(2)}</p>
 <button onClick={() => addToCart(shoe)}>Add to Cart</button>  
 </div> ))}
</div>
 <div className="cart">
 <h2>Shopping Cart</h2>
 <ul>
 {cart.map((item) => (
 <li key={item.id}>{item.name}</li>))}
 </ul>
 </div><Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
        </Link> 
        <Link to="/Shoe" className="button button-shoe">SPORTS SHOE</Link>
 <Link to="/Rough" className="button button-shoe1">
         FANCY
        </Link> 
        <Link to="/Belttype" className="button button-shoe1">
      Belttype
        </Link>  
        <div>
 <Link to="/Rough" className="button button-shoe1">
      REGGULER 
        </Link> 
        <Link to="/Rough" className="button button-shoe1">
      V TYPE
        </Link>  
        <Link to="/Rough" className="button button-shoe1">
      SLIPPER
        </Link>
 <Link to="/Rough" className="button button-shoe1">
      FLIPFLOP
        </Link> 
        </div>
 </div>
 );};
export default App;