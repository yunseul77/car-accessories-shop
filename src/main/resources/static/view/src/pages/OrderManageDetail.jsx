import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import test from '../assets/test.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useOrderStatus from "../hooks/useOrderStatus";
import "../styles/OrderDetail.css";

function OrderManageDetail() {
  const [deliveryStatus, setDeliveryStatus] = useOrderStatus("주문 완료");
  const [totalPrice, setTotalPrice] = usePrice(0);
  const orderedAt = "2024.06.14 주문";
  const orderNumber = "주문번호 " + 12345123214;
  const itemName = "임시 상품명";
  const count = "[2개]";
  const discountPrice = 1231231 + "원";
  const receiverAddress = "서울특별시 노원구 세종대왕로 123-43 우편함 내부";
  const receiverPhone = "010-9988-9898";
  const requestMessage = "오지 말아주세요";
  const receiverName = "홍길동"

  return (
      <>
        <Header />
        <main style={{ marginBottom: "5%" }}>
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
                  <a href="/order"
                     className="nav-link link-body-emphasis">판매내역</a>
                </li>
                <li>
                  <a href="/order" className="nav-link link-body-emphasis">판매자
                    정보 조회/수정</a>
                </li>
              </ul>
              <hr/>
            </div>
            <div className="d-flex flex-column flex-shrink-0 p-3"
                 style={{width: "48%", marginLeft: "2%"}}>
              <h3 className="fs-4" style={{fontWeight: "bold"}}>주문관리</h3>
              <hr/>
              <div
                  className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                  style={{width: "100%", marginTop: "1.5%"}}>
                <div
                    className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <h3 className="fs-4" style={{
                      fontWeight: "bold",
                      color: "#1F75FE"
                    }}>{deliveryStatus}</h3>
                    <h3 className="fs-5 mt-1 mx-2">{orderedAt}</h3>
                    <h3 className="fs-6 mt-2">{orderNumber}</h3>
                  </div>
                  <a href="#" className="nav-link" style={{color: "blue"}}>주문
                    상세보기 ></a>
                </div>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src={test} alt="상품"
                           style={{width: "25%", height: "10%"}}/>
                      <div style={{marginLeft: "10%"}}>
                        <h5>{itemName}</h5>
                        <p>{discountPrice}</p>
                        <p>{count}</p>
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
                        <h5>{itemName}</h5>
                        <p>{discountPrice}</p>
                        <p>{count}</p>
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
              <div className="payment-info" style={{marginTop: "10%"}}>
                <h3 className="fs-4" style={{fontWeight: "bold"}}>수령인 정보</h3>
                <hr/>
                <div className="receiver-info" style={{
                  border: "1px solid #eee",
                  padding: "15px",
                  borderRadius: "5px"
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    <p style={{marginRight: "10px", color:"slategray"}}>수령인
                      성명:</p>
                    <p style={{flexGrow: 1}}>{receiverName}</p>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    <p style={{marginRight: "10px", color:"slategray"}}>배송문자
                      수신번호:</p>
                    <p style={{flexGrow: 1}}>{receiverPhone}</p>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    <p style={{marginRight: "10px", color:"slategray"}}>배송지
                      상세주소:</p>
                    <p style={{flexGrow: 1}}>{receiverAddress}</p>
                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}>
                    <p style={{
                      marginRight: "10px", color:"slategray"
                    }}>배송요청사항:</p>
                    <p style={{flexGrow: 1}}>{requestMessage}</p>
                  </div>
                </div>
                <hr style={{borderColor: "#eeeeeee", margin: "5% 0"}}/>
                <h3 className="fs-4" style={{fontWeight: "bold"}}>결제 정보</h3>
                <hr/>
                <div className="list-group">
                  <div className="list-group-item">
                    <p style={{
                      fontWeight: 'bold',
                      fontSize: '25px',
                      textAlign: 'right'
                    }}>총 결제금액: {totalPrice}원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </>
  )
      ;
}

export default OrderManageDetail;