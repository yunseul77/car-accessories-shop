// src/components/OrderConfirmation.jsx
import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ orderId, onClose }) => {
  return (
    <div className="order-confirmation">
      <h2>주문이 정상적으로 접수되었습니다</h2>
      <p>주문번호: {orderId}</p>
      <button className="close-button" onClick={onClose}>닫기</button>
    </div>
  );
};

export default OrderConfirmation;
