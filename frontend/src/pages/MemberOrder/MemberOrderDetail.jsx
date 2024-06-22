import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import test from '../../assets/test.png';

function MemberOrderDetail() {
  const orderDate = "2024.06.14";
  const orderNumber = "1234567890";
  const item1 = "메이튼 카 플레이";
  const itemId = 1;
  const totalPrice = "123455";
  const totalCount = 4;
  const memberName = "홍길동";
  const phoneNumber = "010-1234-5678";
  const address = "서울시 강남구 역삼동 123-45";
  const request = "부재시 경비실에 맡겨주세요";

  return (
    <>
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "14%", minHeight: "300px", maxHeight: "600px", overflowY: "auto", marginLeft: "17%" }}>
            <a href="#" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
              <span className="fs-4" style={{ fontWeight: "bold" }}>마이페이지</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/orders" className="nav-link active" aria-current="page">주문관리</a>
              </li>
              <li>
                <a href="/edit/profile" className="nav-link link-body-emphasis">판매내역</a>
              </li>
              <li>
                <a href="/review" className="nav-link link-body-emphasis">판매자 정보조회/수정</a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>고객주문 상세</h3>
            <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }} />
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-4" style={{ fontWeight: "bold", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ marginLeft: "6%", marginRight: "6%" }}>배송 중</span>
                  <span style={{ fontSize: "smaller", fontWeight: "lighter", marginRight: "3%" }}>{orderDate}</span>
                  <span style={{ fontSize: "70%", marginRight: "5%" }}>주문</span>
                  <span style={{ fontSize: "60%" }}>주문번호 : {orderNumber}</span>
                </h3>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/items/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/detail`}>
                        <h5>{item1}</h5>
                      </div>
                      <p>가격: {totalPrice}원</p>
                      <p>수량 : {totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "40%", height: "auto", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/items/detail`} />
                    <div style={{ marginLeft: "7%" }}>
                      <div style={{ cursor: "pointer" }} onClick={() => window.location.href = `/items/detail`}>
                        <h5>{item1}</h5>
                      </div>
                      <p>가격: {totalPrice}원</p>
                      <p>수량 : {totalCount}개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height: "100%", width: "25%" }}>
                    <button type="button" className="btn btn-secondary" style={{ borderColor: "#ccc", backgroundColor: "white", color: "black" }}>주문 취소</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="payment-info" style={{ marginTop: "10%" }}>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>수령인 정보</h3>
              <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }} />
              <div className="list-group">
                {/* 구매자의 정보를 받아와서 표시해야함 */}
                <div className="list-group-item">
                  <p>수령인 성명 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{memberName}</p>
                  <p>배송문자 수신번호 &emsp;&emsp;&emsp;&emsp;&emsp;{phoneNumber}</p>
                  <p>배송지 상세주소 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{address}</p>
                  <p>배송 요청사항 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{request}</p>
                </div>
              </div>
              <hr style={{ borderColor: "#eeeeeee", margin: "5% 0" }} />
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>결제 정보</h3>
              <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }} />
              <div className="list-group">
                <div className="list-group-item">
                  {/* 총결제금액은 받아와야 할것 같음 */}
                  <p style={{ fontWeight: "bold", fontSize: "25px", textAlign: "right" }}>총 결제금액 : {totalPrice}원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MemberOrderDetail;