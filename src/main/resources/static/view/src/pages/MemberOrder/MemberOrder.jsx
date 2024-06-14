import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import test from '../../assets/test.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyPageNav from "../../components/MyPageNav";

function MemberOrder() {
  return (
      <>
        <Header/>
        <main style={{marginBottom: "5%"}}>
          <div className="b-example-divider"></div>
          <div className="row">
            <MyPageNav/> { /*컴포넌트로 대체*/}
            <div className="d-flex flex-column flex-shrink-0 p-3"
                 style={{width: "48%", marginLeft: "2%"}}>
              <h3 className="fs-4" style={{fontWeight: "bold"}}>주문목록</h3>
              <hr/>
              <div
                  className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                  style={{width: "100%", marginTop: "1.5%"}}>
                <div
                    className="d-flex justify-content-between align-items-center">
                  <h3 className="fs-4" style={{fontWeight: "bold"}}>배송 중 (나중에 날짜
                    추가)</h3>
                  <a href="#" className="nav-link" style={{color: "blue"}}>주문
                    상세보기 ></a>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품"
                           style={{width: "25%", height: "10%"}}/>
                      <div style={{marginLeft: "10%"}}>
                        <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                        <p>수량 : 1개</p>
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
                      <button type="button" className="btn btn-secondary"
                              style={{
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
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품"
                           style={{width: "25%", height: "10%"}}/>
                      <div style={{marginLeft: "10%"}}>
                        <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                        <p>수량 : 3개</p>
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
                      <button type="button" className="btn btn-secondary"
                              style={{
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
              <div
                  className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                  style={{width: "100%", marginTop: "1.5%"}}>
                <div
                    className="d-flex justify-content-between align-items-center">
                  <h3 className="fs-4" style={{fontWeight: "bold"}}>배송 완료 (나중에
                    날짜 추가)</h3>
                  <a href="#" className="nav-link" style={{color: "blue"}}>주문
                    상세보기 ></a>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품"
                           style={{width: "25%", height: "10%"}}/>
                      <div style={{marginLeft: "10%"}}>
                        <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                        <p>수량 : 1개</p>
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
                      <button type="button" className="btn btn-secondary"
                              style={{
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
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품"
                           style={{width: "25%", height: "10%"}}/>
                      <div style={{marginLeft: "10%"}}>
                        <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                        <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                        <p>수량 : 3개</p>
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
                      <button type="button" className="btn btn-secondary"
                              style={{
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
            </div>
          </div>
        </main>
        <Footer/>
      </>
  );
}

export default MemberOrder;