import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyPageNav = () => {
  return (
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
            <a href="/edit/profile" className="nav-link link-body-emphasis">회원정보 조회수정</a>
          </li>
          <li>
            <a href="/review" className="nav-link link-body-emphasis">작성리뷰 목록</a>
          </li>
        </ul>
        <hr />
      </div>
  );
};

export default MyPageNav;