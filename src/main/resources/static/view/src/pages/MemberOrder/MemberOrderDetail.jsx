import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function MemberOrderDetail() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/orders')
    .then(response => {
      setOrders(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }, []);

  return (
      <>
        <Header/>
        <main style={{marginBottom: "5%"}}>
          <div className="b-example-divider"></div>
          <div className="row">
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                style={{
                  width: "14%",
                  minHeight: "300px",
                  maxHeight: "600px",
                  overflowY: "auto",
                  marginLeft: "17%"
                }}>
              <a href="#"
                 className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
                <span className="fs-4" style={{fontWeight: "bold"}}>마이페이지</span>
              </a>
              <hr/>
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="/order" className="nav-link active"
                     aria-current="page">주문목록</a>
                </li>
                <li>
                  <a href="/order" className="nav-link link-body-emphasis">회원정보
                    조회수정</a>
                </li>
                <li>
                  <a href="/order" className="nav-link link-body-emphasis">작성리뷰
                    목록</a>
                </li>
              </ul>
              <hr/>
            </div>
            <div className="d-flex flex-column flex-shrink-0 p-3"
                 style={{width: "48%", marginLeft: "2%"}}>
              <h3 className="fs-4" style={{fontWeight: "bold"}}>고객주문 상세</h3>
              <hr/>
              <div
                  className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                  style={{width: "100%", marginTop: "1.5%"}}>
                <div className="d-flex justify-content-left align-items-center">
                  <h3 className="fs-4"
                      style={{fontWeight: "bold", color: "blue"}}>배송 중</h3>
                  <a style={{
                    marginLeft: "2%",
                    fontSize: "22px",
                    marginBottom: "0.5rem"
                  }}>2024.05.24 주문</a>
                  <a style={{marginLeft: "2%", fontSize: "14px"}}>주문번호
                    12312312341</a>
                </div>
                <ul className="list-group">
                  {
                    orders.map((order) => (
                        <div key={order.id}>
                          <h2>Order Number: {order.orderNumber}</h2>
                          <p>Receiver Name: {order.receiverName}</p>
                          <p>Receiver Phone: {order.receiverPhone}</p>
                          <p>Request Message: {order.requestMessage}</p>
                          <p>Total Price: {order.totalPrice}</p>
                          <p>Delivery Address: {order.delivery.address}</p>
                          <p>Delivery Status: {order.delivery.status}</p>
                          <p>Member Name: {order.member.name}</p>
                          <p>Member Email: {order.member.email}</p>
                          <p>Member Phone: {order.member.phone}</p>
                          <p>Member Address: {order.member.address}</p>
                          <button type="button" className="btn btn-secondary"
                                  style={{
                                    marginTop: "40%",
                                    marginBottom: "5%",
                                    borderColor: "#ccc",
                                    backgroundColor: "white",
                                    color: "black"
                                  }}>주문 취소
                          </button>
                          <button type="button" className="btn btn-primary"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                    borderColor: "#ccc",
                                    backgroundColor: "white",
                                    color: "black"
                                  }}>구매 확정
                          </button>
                          <button type="button" className="btn btn-success"
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "40%",
                                    borderColor: "#ccc",
                                    backgroundColor: "white",
                                    color: "black"
                                  }}>리뷰 작성하기
                          </button>
                        </div>
                    ))
                  }
                </ul>
              </div>

              <div className="payment-info" style={{marginTop: "10%"}}>
                <h3 className="fs-4" style={{fontWeight: "bold"}}>수령인 정보</h3>
                <hr/>
                <div className="list-group">
                  <div className="list-group-item">
                    <pre>수령인 성명                  홍길동</pre>
                    <pre>배송문자 수신번호             010-9999-8888</pre>
                    <pre>배송지 상세주소              서울특별시 노원구 세종대왕로 123-38 우편함 내부</pre>
                    <pre>배송 요청사항                드론택배로 부탁드려요</pre>
                  </div>
                </div>
                <hr style={{borderColor: "#eeeeeee", margin: "5% 0"}}/>
                <h3 className="fs-4" style={{fontWeight: "bold"}}>결제 정보</h3>
                <hr/>
                <div className="list-group">
                  <div className="list-group-item">
                    <p style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      textAlign: "right"
                    }}>총 결제금액 : 70,000원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </>
  );
}

export default MemberOrderDetail;