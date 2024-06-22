import React, { useState, useEffect } from 'react';
import CartItem from '../../components/CartItem';
import OrderForm from '../../components/OrderForm';
import OrderConfirmation from '../../components/OrderConfirmation';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';


const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [
      { id: 1, name: '차량용 최고급 좌석시트, 몰딩, 인테리어 용품, 공기청정세트, 3개', price: 22000, quantity: 1, checked: false, image: 'image_url_1' },
      { id: 2, name: '사운드 트렁크매트 차박 매트 스탠드 MQ4 (신형 혼용), 5인승', price: 78000, quantity: 1, checked: false, image: 'image_url_2' },
      { id: 3, name: '포르쉐 911 풀옵션 당일배송', price: 282123352, quantity: 1, checked: false, image: 'image_url_3' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [isOrderConfirmationVisible, setIsOrderConfirmationVisible] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheck = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const totalAmount = cartItems.reduce((total, item) => item.checked ? total + (item.price * item.quantity) : total, 0);

  const handlePurchase = () => {
    if (totalAmount === 0) {
      alert('선택된 상품이 없습니다.');
      return;
    }
    setIsOrderFormVisible(true);
  };

  const handleOrderConfirm = (orderDetails) => {
    console.log('Order Details:', orderDetails);
    setIsOrderFormVisible(false);
    setOrderId('1230981232174'); // 예시 주문번호
    setIsOrderConfirmationVisible(true);
  };

  const handleOrderCancel = () => {
    setIsOrderFormVisible(false);
  };

  const handleOrderClose = () => {
    setIsOrderConfirmationVisible(false);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="cart-items">
        <h1>장바구니</h1>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
            onCheck={handleCheck}
          />
        ))}
      </div>
      <div className="cart-summary">
        <p>총 주문 금액: {totalAmount.toLocaleString()}원</p>
        <button className="order-button" onClick={handlePurchase}>구매하기</button>
      </div>


      <Modal show={isOrderFormVisible} onHide={handleOrderCancel}>
        <Modal.Body>
          <OrderForm onConfirm={handleOrderConfirm} onCancel={handleOrderCancel} />
        </Modal.Body>
      </Modal>

      <Modal show={isOrderConfirmationVisible} onHide={handleOrderClose}>
        <Modal.Body>
          <OrderConfirmation orderId={orderId} onClose={handleOrderClose} />
        </Modal.Body>
      </Modal>

      {/* <Modal
        isOpen={isOrderFormVisible}
        onRequestClose={handleOrderCancel}
        contentLabel="주문 폼"
        className="modal"
        overlayClassName="overlay"
      >
      </Modal>
      <Modal
        isOpen={isOrderConfirmationVisible}
        onRequestClose={handleOrderClose}
        contentLabel="주문 확인"
        className="modal"
        overlayClassName="overlay"
      >
        <OrderConfirmation orderId={orderId} onClose={handleOrderClose} />
      </Modal> */}
    </div>
  );
};

export default Cart;