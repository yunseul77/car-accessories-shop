import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import test from '../../assets/test.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import MyPageNav from '../../components/MyPageNav';
import { useParams } from 'react-router-dom';

function MemberOrder() {
  const { memberId } = useParams();
  const [orders, setOrders] = useState([]);

    useEffect(() => {
      axios.get('/api/orders/${memberId}')
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, [memberId]);

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row">
          <MyPageNav/>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>주문목록</h3>
            <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }} />
            {orders.map((order) => (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }} key={order.id}>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-4" style={{ fontWeight: "bold", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ color: "blue", marginLeft:"10%", marginRight: "10%" }}>배송 중</span>
                  <span style={{ fontSize: "smaller", fontWeight: "lighter", marginRight:"5%" }}>orderDate</span>
                  <span style={{ fontSize: "70%" }}>주문</span>
                </h3>
                {/* 주문 상세보기 누를시 21번 화면으로 이동하게 해놈 */}
                <a href={`/orders/detail/${order.id}`} className="nav-link" style={{ color: "blue" }}>주문 상세보기 ></a>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={order.itemImage} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/items/${order.itemId}/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/${order.itemId}/detail`}>
                        <h5>{order.itemName}</h5>
                      </div>
                      <p>가격: {order.totalPrice}원</p>
                      <p>수량 : {order.totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop: "5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>리뷰 작성하기</button>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={order.itemImage} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer"}} onClick={() => window.location.href = `/item/${order.itemId}/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/${order.itemId}/detail`}>
                        <h5>{order.itemName}</h5>
                      </div>
                      <p>가격: {order.totalPrice}원</p>
                      <p>수량 : {order.totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop: "5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>리뷰 작성하기</button>
                  </div>
                </li>
              </ul>
            </div>
            ))}
            {orders.map((order) => (
            <div className="d-flex flex-column flex-shrink-0 p-3 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }} key={order.id}>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-4" style={{ fontWeight: "bold", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ marginLeft:"10%", marginRight: "10%" }}>배송완료</span>
                  <span style={{ fontSize: "smaller", fontWeight: "lighter", marginRight:"5%" }}>orderDate</span>
                  <span style={{ fontSize: "70%" }}>주문</span>
                </h3>
                <a href={`/orders/detail/${order.id}`} className="nav-link" style={{ color: "blue" }}>주문 상세보기 ></a>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={order.itemImage} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/item/${order.itemId}/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/${order.itemId}/detail`}>
                        <h5>{orders.itemName}</h5>
                      </div>
                      <p>가격: {order.totalPrice}원</p>
                      <p>수량 : {order.totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop: "5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>리뷰 작성하기</button>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={order.itemImage} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/item/${order.itemId}/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/${order.itemId}/detail`}>
                        <h5>{order.itemName}</h5>
                      </div>
                      <p>가격: {order.totalPrice}원</p>
                      <p>수량 : {order.totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop: "5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black" }}>리뷰 작성하기</button>
                  </div>
                </li>
              </ul>
            </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MemberOrder;