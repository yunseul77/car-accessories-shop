import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './로고.png';
import React from 'react';

function MemberOrder() {
  return (
    <main>
        <div className="b-example-divider"></div>
        <nav className="py-1 bg-body-tertiary border-bottom" style={{ backgroundColor: "white" }}>
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2 active" aria-current="page" style={{ fontSize: "80%", padding: "1% 2%" }}>
                  <span style={{ verticalAlign: "inherit" }}>고객센터</span>
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2" style={{ fontSize: "80%", padding: "1% 2%" }}>
                  <span style={{ verticalAlign: "inherit" }}>로그인</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2" style={{ fontSize: "80%", padding: "1% 2%" }}>
                  <span style={{ verticalAlign: "inherit" }}>가입하기</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <a href="/main" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none" style={{ flex: "0.6" }}>
              <img src={logo} alt="Logo" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
              <span className="fs-4">차량용품</span>
            </a>
            <select className="form-select" aria-label="Default select example" style={{ flex: "0.4" }}>
              <option selected>전체</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
            </select>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search" style={{ flex: "3" }}>
              <input type="search" className="form-control" placeholder="상품을 검색하세요." aria-label="Search" />
            </form>
            <div className="d-flex gap-2 justify-content-end" style={{ flex: "0.72" }}>
              <button className="btn btn-primary me-md-2" type="button" style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "none", border: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span style={{ fontSize: "70%", color: "black" }}>마이페이지</span>
              </button>
              <button className="btn btn-primary me-md-2" type="button" style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "none", border: "none" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                <span style={{ fontSize: "70%", color: "black" }}>장바구니</span>
              </button>
            </div>
          </div>
        </header>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "14%", marginLeft: "17%" }}>
            <a href="#" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
              <span className="fs-4" style={{ fontWeight: "bold" }}>마이페이지</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/order" className="nav-link active" aria-current="page">주문목록</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">회원정보 조회수정</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">작성리뷰 목록</a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>주문목록</h3>
            <hr />
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "100%", marginTop: "1.5%" }}>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>배송중 (나중에 날짜 추가)</h3>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <img src="상품1이미지URL" alt="상품 1" style={{ width: "20%", height: "50px" }} />
                  <div style={{ marginLeft: "10px" }}>
                    <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                    <p>가격: ₩10000(나중에 총가격으로 변경), 수량: 1(나중에 총수량으로 변경)</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <img src="상품2이미지URL" alt="상품 2" style={{ width: "20%", height: "50px" }} />
                  <div style={{ marginLeft: "10px" }}>
                    <h5>상품 2</h5>
                    <p>가격: ₩20000, 수량: 2</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
  );
}

export default MemberOrder;