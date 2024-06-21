// src/components/OrderForm.jsx
import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = ({ onConfirm, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (!name || !address || !phone) {
      setError('모든 필드를 입력해 주세요.');
    } else {
      setError('');
      onConfirm({ name, address, phone, request });
    }
  };

  return (
    <div className="order-form">
      <h2>상품주문</h2>
      <p>배송지 정보를 입력해 주세요</p>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="수령인 성명"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="배송지 상세주소"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="배송문자 수신번호"
      />
      <input
        type="text"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        placeholder="배송 요청사항"
      />
      <button className="order-button" onClick={handleConfirm}>주문하기</button>
      <button className="cancel-button" onClick={onCancel}>취소</button>
    </div>
  );
};

export default OrderForm;
