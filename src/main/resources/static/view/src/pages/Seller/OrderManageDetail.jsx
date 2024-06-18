import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState } from 'react';
import test from '../../assets/test.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "../../styles/OrderDetail.css";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

function OrderManageDetail() {
  const { itemId, orderId } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          throw new Error("접근 권한이 없습니다.");
        }

        const response = await fetch(`http://localhost:8080/sellers/orders/${itemId}/${orderId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
        });

        if (!response.ok) {
          throw new Error("네트워크 상태가 불안정합니다.");
        }

        const data = await response.json();
        setOrderDetail(data.content);
      } catch (error) {
        console.error("주문을 불러오는데 실패했습니다.", error);
      }
    };

    fetchOrderDetail();
  }, [itemId, orderId]);

  const {
    deliveryStatus, orderedAt, orderNumber, receiverName,
    receiverPhone, receiverAddress, requestMessage,
    totalPrice, orderItem
  } = orderDetail;

  return (
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
               style={{
                 width: "14%",
                 minHeight: "300px",
                 maxHeight: "600px",
                 overflowY: "auto",
                 marginLeft: "17%"
               }}>
            <a href="#"
               className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
              <span className="fs-4" style={{ fontWeight: "bold" }}>마이페이지</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/order" className="nav-link active" aria-current="page">주문목록</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">판매내역</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">판매자 정보 조회/수정</a>
              </li>
            </ul>
            <hr/>
          </div>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>주문관리</h3>
            <hr/>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "100%", marginTop: "1.5%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <h3 className="fs-4" style={{ fontWeight: "bold", color: "#1F75FE" }}>{deliveryStatus}</h3>
                  <h3 className="fs-5 mt-1 mx-2">{orderedAt}</h3>
                  <h3 className="fs-6 mt-2">{orderNumber}</h3>
                </div>
                <a href="#" className="nav-link" style={{ color: "blue" }}>주문 상세보기 ></a>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                    <div style={{ marginLeft: "10%" }}>
                      <h5>{orderItem.itemName}</h5>
                      <p>{orderItem.discountPrice}</p>
                      <p>{orderItem.count}</p>
                    </div>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    borderLeft: "1px solid #eee",
                    paddingLeft: "4%",
                    paddingRight: "3%",
                    height: "100%"
                  }}>
                    <button type="button" className="btn btn-secondary" style={{
                      marginTop: "40%",
                      marginBottom: "5%",
                      borderColor: "#ccc",
                      backgroundColor: "white",
                      color: "black"
                    }}>주문 취소
                    </button>
                    <button type="button" className="btn btn-primary" style={{
                      marginTop: "5%",
                      marginBottom: "5%",
                      borderColor: "#ccc",
                      backgroundColor: "white",
                      color: "black"
                    }}>구매 확정
                    </button>
                    <button type="button" className="btn btn-success" style={{
                      marginTop: "5%",
                      marginBottom: "40%",
                      borderColor: "#ccc",
                      backgroundColor: "white",
                      color: "black"
                    }}>리뷰 작성하기
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="payment-info" style={{ marginTop: "10%" }}>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>수령인 정보</h3>
              <hr/>
              <div className="list-group">
                <div className="list-group-item">
                  <pre>수령인 성명                  {receiverName}</pre>
                  <pre>배송문자 수신번호             {receiverPhone}</pre>
                  <pre>배송지 상세주소              {receiverAddress}</pre>
                  <pre>배송 요청사항                {requestMessage}</pre>
                </div>
              </div>
              <hr style={{ borderColor: "#eeeeeee", margin: "5% 0" }}/>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>결제 정보</h3>
              <hr/>
              <div className="list-group">
                <div className="list-group-item">
                  <p style={{
                    fontWeight: 'bold',
                    fontSize: '25px',
                    textAlign: 'right'
                  }}>총 결제금액: {orderDetail.totalPrice}원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default OrderManageDetail;