import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Cookies from 'js-cookie';

const OrderManage = () => {
  const {sellerId} = useParams();
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        console.log("Access Token:", accessToken);
        if (!accessToken) {
          throw new Error("접근 권한이 없습니다.");
        }

        const response = await fetch(
            `http://localhost:8080/sellers/orderpages?pageindex=0&pagesize=10&sort=updatedAt`,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
            });

        if (response.status === 403) {
          throw new Error("접근 권한이 없습니다.");
        }

        if (!response.ok) {
          throw new Error("네트워크 상태가 불안정합니다.");
        }

        const data = await response.json();
        setOrders(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("주문을 불러오는데 실패했습니다.", error);
      }
    };

    fetchOrders();
  }, [sellerId]);

  const handleDeliveryStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
        prevOrders.map(order =>
            order.orderId === orderId ? { ...order, deliveryStatus: newStatus } : order
        )
    );
  };

  return (<div className="container">
    <h3 className="fs-4" style={{fontWeight: 'bold'}}>주문관리</h3>
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
        {orders.map((order) => (<tr key={order.orderId}>
          <td>{order.categoryName}</td>
          <td>{order.itemName}</td>
          <td>{order.sellingPrice}</td>
          <td>{order.orderQuantity}</td>
          <td>{order.totalPrice}</td>
          <td>{order.customerId}</td>
          <td>{order.orderCreatedAt}</td>
          <td>
            <select className="form-control" value={order.deliveryStatus}
                    onChange={(e) => handleDeliveryStatusChange(order.id,
                        e.target.value)}>
              <option value="ORDERED">발송준비</option>
              <option value="IN_TRANSIT">배송중</option>
              <option value="DELIVERED">배송완료</option>
            </select>
          </td>
          <td>
                <span
                    className={`badge ${order.orderStatus === '주문 완료'
                        ? 'badge-success'
                        : 'badge-warning'}`}>
                    {order.orderStatus}
               </span>
          </td>
          <td>
            <button className="btn btn-secondary btn-sm">수정</button>
            <button className="btn btn-danger btn-sm">삭제</button>
          </td>
        </tr>))}
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1">Previous</a>
        </li>
        {[...Array(totalPages).keys()].map(num => (
            <li className="page-item" key={num}>
              <a className="page-link" href="#">{num + 1}</a>
            </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>);
};

export default OrderManage;