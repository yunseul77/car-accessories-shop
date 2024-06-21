import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onQuantityChange, onRemove, onCheck }) => {
  return (
    <div className="cart-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onCheck(item.id)}
      />
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <span className="cart-item-name">{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value, 10))}
        className="cart-item-quantity"
      />
      <span className="cart-item-price">{(item.price * item.quantity).toLocaleString()}원</span>
      <button onClick={() => onRemove(item.id)} className="cart-item-remove">삭제</button>
    </div>
  );
};

export default CartItem;
