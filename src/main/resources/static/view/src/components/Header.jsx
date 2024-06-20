import React, { useContext } from 'react';
import logo from '../assets/로고.png';
import { TokenContext } from '../tokenContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { token, logout } = useContext(TokenContext);
    const navigate = useNavigate();
    const memberId = token?.memberId;

  return (
    <div className="header-container">
      <div className="b-example-divider"></div>
      <nav className="py-1 bg-body-white border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              {/* 고객센터 없앤곳 (로그인/로그아웃 버튼을 오른쪽 끝에 배치하기위해 <a>태그만 지움) -feat.코치님 */}
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              {
                token ? (
                  <button onClick={logout} className="nav-link link-body-emphasis px-2" style={{ fontSize: "80%", padding: "1% 2%" }}>
                    <span style={{ verticalAlign: "inherit" }}>로그아웃</span>
                  </button>
                ) : (
                  <Link to="/auth/login" className="nav-link link-body-emphasis px-2" style={{ fontSize: "80%", padding: "1% 2%" }}>
                    <span style={{ verticalAlign: "inherit" }}>로그인</span>
                  </Link>
                )
              }
            </li>
            {!token && (
              <li className="nav-item">
                <button onClick={() => navigate('/auth/select')} className="nav-link link-body-emphasis px-2" style={{ fontSize: "80%", padding: "1% 2%" }}>
                  <span style={{ verticalAlign: "inherit" }}>가입하기</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <header className="py-3 border-bottom">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none" style={{ flex: "0.6" }}>
            <img src={logo} alt="Logo" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
            <span className="fs-4">차량용품</span>
          </a>
          <select className="form-select" aria-label="Default select example" style={{ flex: "0.6" }}>
            <option value="" defaultValue>전체</option>
            <option value="1">방향제/공기청정</option>
            <option value="2">바닥/트렁크 매트</option>
            <option value="3">시트/쿠션</option>
            <option value="4">커버/몰딩</option>
            <option value="5">수납/정리용품</option>
            <option value="6">편의용품/액세사리</option>
            <option value="7">햇빛가리개/썬팅</option>
          </select>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search" style={{ flex: "3" }}>
            <input type="search" className="form-control" placeholder="상품을 검색하세요." aria-label="Search" />
          </form>
          <div className="d-flex gap-2 justify-content-end" style={{ flex: "0.72" }}>
             <button className="btn btn-primary me-md-2" type="button" style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "none", border: "none" }} onClick={() => navigate(token ? `/orders/${memberId}` : '/auth/login')}>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
               </svg>
               <span style={{ fontSize: "70%", color: "black" }}>마이페이지</span>
             </button>
             <button className="btn btn-primary me-md-2" type="button" style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "none", border: "none" }} onClick={() => navigate(token ? `/orders/${memberId}` : '/auth/login')}>
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-cart3" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
               </svg>
               <span style={{ fontSize: "70%", color: "black" }}>장바구니</span>
             </button>
          </div>
        </div>
        <div className="category-list d-flex justify-content-center align-items-center" style={{ marginTop:"0%", marginBottom:"0%" }}>
          {[
            { name: "방향제/공기청정", link: "/category/air-fresheners" },
            { name: "바닥/트렁크 매트", link: "/category/floor-mats" },
            { name: "시트/쿠션", link: "/category/seat-cushions" },
            { name: "커버/몰딩", link: "/category/covers-moldings" },
            { name: "수납/정리용품", link: "/category/storage-organizers" },
            { name: "편의용품/액세사리", link: "/category/convenience-accessories" },
            { name: "햇빛가리개/썬팅", link: "/category/sunshades-tinting" },
          ].map((category) => (
            <a key={category.link} href={category.link} className="text-decoration-none" style={{ color: 'black', margin: '0 2%' }}>
              {category.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
