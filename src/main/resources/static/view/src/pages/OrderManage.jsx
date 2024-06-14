import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderManage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 여기에 API 호출을 통해 데이터를 가져오는 로직을 추가할 수 있습니다.
    // 현재는 예시 데이터를 사용합니다.
    const fetchOrders = async () => {
      const exampleOrders = [
        {
          category: '생활용품/잡화',
          productName: '상품명 예시',
          productPrice: '238000원',
          quantity: 20,
          totalAmount: '5660000원',
          buyerId: 'qwerasdf1234',
          orderTime: '2024-05-25 17:56:32',
          deliveryStatus: '발송준비',
          orderStatus: '주문 완료',
        },
        // 여기에 더 많은 예시 데이터를 추가하세요
      ];
      setOrders(exampleOrders);
    };

    fetchOrders();
  }, []);

  return (
      <>
      <Header />
      <div className="container">
        <h3 className="fs-4" style={{ fontWeight: 'bold' }}>주문관리</h3>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
              <th>카테고리</th>
              <th>상품명</th>
              <th>판매가격</th>
              <th>판매수량</th>
              <th>총 판매 금액</th>
              <th>구매자 ID</th>
              <th>주문된 시간</th>
              <th>배송 상태</th>
              <th>주문 상태</th>
              <th>변경</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.category}</td>
                  <td>{order.productName}</td>
                  <td>{order.productPrice}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalAmount}</td>
                  <td>{order.buyerId}</td>
                  <td>{order.orderTime}</td>
                  <td>
                    <select className="form-control">
                      <option value="발송준비">발송준비</option>
                      <option value="배송중">배송중</option>
                      <option value="배송완료">배송완료</option>
                    </select>
                  </td>
                  <td>
                  <span className={`badge ${order.orderStatus === '주문 완료' ? 'badge-success' : 'badge-warning'}`}>
                    {order.orderStatus}
                  </span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-sm">수정</button>
                    <button className="btn btn-danger btn-sm">삭제</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            {[...Array(10).keys()].map(num => (
                <li className="page-item" key={num}>
                  <a className="page-link" href="#">{num + 1}</a>
                </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
  <Footer />
        </>
  );
};

export default OrderManage;