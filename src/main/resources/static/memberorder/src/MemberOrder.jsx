import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './로고.png';
import React from 'react';
import test from './test.png';

function MemberOrder() {
  return (
    <>
    <main style={{ marginBottom: "5%" }}>
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
                  <span style={{ verticalAlign: "inherit" }}>로그아웃</span>
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
          <div className="category-list d-flex justify-content-center align-items-center" style={{marginTop:"0%", marginBottom:"0%"}}>
             {[
               { name: "방향제/공기청정", link: "/category/air-fresheners" },
               { name: "바닥/트렁크 매트", link: "/category/floor-mats" },
               { name: "시트/쿠션", link: "/category/seat-cushions" },
               { name: "커버/몰딩", link: "/category/covers-moldings" },
               { name: "수납/정리용품", link: "/category/storage-organizers" },
               { name: "편의용투/액세사리", link: "/category/convenience-accessories" },
               { name: "햇빛가리개/썬팅", link: "/category/sunshades-tinting" },
             ].map((category) => (
                <a href={category.link} className="text-decoration-none" style={{ color: 'black', margin: '0 2%' }}>
                 {category.name}
               </a>
             ))}
          </div>
        </header>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "14%", minHeight: "300px", maxHeight: "600px", overflowY: "auto", marginLeft: "17%" }}>
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
          {/* 여기가 화면에 따라 길이가 다르게 나오는거 같은대 width를 조절해야할거 같아요 */}
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>주문목록</h3>
            <hr />
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "100%", marginTop: "1.5%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-4" style={{ fontWeight: "bold" }}>배송 중 (나중에 날짜 추가)</h3>
                <a href="#" className="nav-link" style={{color:"blue"}}>주문 상세보기 ></a>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                    <div style={{ marginLeft: "10%" }}>
                      <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                      <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                      <p>수량 : 1개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%"}}>
                    <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                    <div style={{ marginLeft: "10%" }}>
                      <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                      <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                      <p>수량 : 3개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%"}}>
                    <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "100%", marginTop: "1.5%" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="fs-4" style={{ fontWeight: "bold" }}>배송 완료 (나중에 날짜 추가)</h3>
                <a href="#" className="nav-link" style={{color:"blue"}}>주문 상세보기 ></a>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                    <div style={{ marginLeft: "10%" }}>
                      <h5>상품 1(나중에 상품이름을 받아오는걸로 변경)</h5>
                      <p>가격: ₩10000(나중에 총가격으로 변경)</p>
                      <p>수량 : 1개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%"}}>
                    <button type="button" className="btn btn-secondary" style={{ marginTop:"40%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>주문 취소</button>
                    <button type="button" className="btn btn-primary" style={{ marginTop:"5%", marginBottom: "5%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>구매 확정</button>
                    <button type="button" className="btn btn-success" style={{ marginTop:"5%", marginBottom: "40%", borderColor: "#ccc", backgroundColor: "white", color: "black"}}>리뷰 작성하기</button>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={test} alt="상품" style={{ width: "25%", height: "10%" }} />
                    <div style={{ marginLeft: "10%" }}>
                      <h5>상품 2(나중에 상품이름을 받아오는걸로 변경)</h5>
                      <p>가격: ₩60000(나중에 총가격으로 변경)</p>
                      <p>수량 : 3개</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #eee", paddingLeft: "4%", paddingRight: "3%", height:"100%"}}>
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
      <footer className="bg-dark text-light py-4 mt-auto">
      <div className="row justify-content-center mt-4">
          <div className="col text-center">
              <h1>Developed By Team 09</h1>
          </div>
      </div>
      <hr style={{width:"70%", margin:"auto", marginTop:"2%", marginBottom:"2%", border:"2px solid #FFFFFF", backgroundColor:"#FFFFFF"}}/>
      <div className="row justify-content-center mt-2">
          <div className="col text-center">
              <a style={{marginLeft:"5%", marginRight:"5%"}}>김가은</a>
              <a style={{marginLeft:"5%", marginRight:"5%"}}>김두현</a>
              <a style={{marginLeft:"5%", marginRight:"5%"}}>김민재</a>
              <a style={{marginLeft:"5%", marginRight:"5%"}}>박규태</a>
              <a style={{marginLeft:"5%", marginRight:"5%"}}>안지완</a>
              <a style={{marginLeft:"5%", marginRight:"5%"}}>최수종</a>
          </div>
      </div>
    </footer>
    </>
  );
}

export default MemberOrder;