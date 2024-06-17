import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState, useEffect} from 'react';
import test from '../assets/test.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

function MemberOrder() {
  const memberId = 1;
  const orderDate = "2024.06.14";

  return (
      <>
        <Header />
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
                  <a href="/orders" className="nav-link active" aria-current="page">주문목록</a>
                </li>
                <li>
                  <a href="/edit" className="nav-link link-body-emphasis">회원정보 조회수정</a>
                </li>
                <li>
                  <a href="/review" className="nav-link link-body-emphasis">작성리뷰 목록</a>
                </li>
              </ul>
              <hr />
            </div>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>주문목록</h3>
              <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }}/>
              <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="fs-4" style={{ fontWeight: "bold", display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
                    <span style={{ color: "blue", marginRight: "10%" }}>배송 중</span>
                    <span style={{ fontSize: "smaller", fontWeight: "lighter" }}>{orderDate}</span>
                  </h3>
                  <a href={`/orders/${memberId}/orderdetail`} className="nav-link" style={{ color:"blue" }}>주문 상세보기 ></a>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} /> {/* 이미지를 누르면 상품 상세페이지로 가야하는가? */}
                      <div style={{ marginLeft: "7%" }}>
                        <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>  {/* 상품 이름을 누르면 상품 상세페이지로 가야하는가? */}
                        <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                        <p>수량 : 1개</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%", width:"25%"}}>
                      <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                      <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                      <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                      <div style={{ marginLeft: "7%" }}>
                        <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                        <p>수량 : 3개</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%", width:"25%"}}>
                      <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                      <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                      <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column flex-shrink-0 p-3 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="fs-4" style={{ fontWeight: "bold" }}>배송 완료 (나중에 날짜 추가)</h3>
                  <a href="#" className="nav-link" style={{ color:"blue" }}>주문 상세보기 ></a>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                      <div style={{ marginLeft: "7%" }}>
                        <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                        <p>수량 : 1개</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%", width:"25%"}}>
                      <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                      <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                      <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                      <div style={{ marginLeft: "7%" }}>
                        <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                        <p>수량 : 3개</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%", width:"25%"}}>
                      <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                      <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                      <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
  );
}

export default MemberOrder;