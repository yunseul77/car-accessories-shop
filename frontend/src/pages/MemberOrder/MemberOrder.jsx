import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyPageNav from '../../components/MyPageNav';
import Cookies from 'js-cookie';

function MemberOrder() {
  const [orders, setOrders] = useState([]);
  const [memberId, setMemberId] = useState(null); // useState 훅을 사용하여 memberId와 setMemberId 상태를 정의

  useEffect(() => {
    const fetchMemberIdAndOrders = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        console.log("Access Token:", accessToken);
        if (!accessToken) {
          throw new Error("접근 권한이 없습니다.");
        }

        // 토큰에서 ID를 추출하는 로직
        const response = await axios.get('http://localhost:8080/auth/parse-token', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        const id = response.data.id;
        setMemberId(id);

        // memberId가 설정된 후에 주문을 가져옵니다.
        const orderResponse = await axios.get(`http://localhost:8080/orders/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        setOrders(orderResponse.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMemberIdAndOrders();
  }, []);

  return (
    <>
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row" style={{width:"100%"}}>
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
    </>
  );
}

export default MemberOrder;