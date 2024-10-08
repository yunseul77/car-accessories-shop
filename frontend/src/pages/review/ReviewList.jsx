import React, { useState } from 'react';
import test from '../../assets/test.png';
import StarRating from '../../components/StarRating';

function ReviewList() {
  const item1 = "메이튼 카 플레이";
  const totalCount = 4;
  const createdAt = "2024.06.14";
  const reviewSummary = "리뷰 한줄 요약";
  const reviewDetail = "리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 리뷰 상세 내용 ";

  // 리뷰 삭제를 처리하는 함수
  const handleDelete = async (reviewId) => {
    try {
      const response = await fetch(`/review/${reviewId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('리뷰 삭제 중 오류 발생!');
      }

      alert('리뷰가 삭제되었습니다.');
      // 필요한 경우 리뷰 목록을 새로고침하거나 삭제된 리뷰를 상태에서 제거
    } catch (error) {
      console.error('리뷰 삭제 중 오류가 발생했습니다.', error);
      alert('리뷰 삭제 중 오류가 발생했습니다.');
    }
  };

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
                  <a href="/orders" className="nav-link link-body-emphasis" aria-current="page">주문목록</a>
                </li>
                <li>
                  <a href="/edit/profile" className="nav-link link-body-emphasis">회원정보 조회수정</a>
                </li>
                <li>
                  <a href="/review" className="nav-link active">작성리뷰 목록</a>
                </li>
              </ul>
              <hr />
            </div>
            <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
              <h3 className="fs-4" style={{ fontWeight: "bold" }}>작성한 리뷰 목록</h3>
              <hr style={{ color: "#000000", backgroundColor: "#000000", border: "0.5px solid #000000", width: "100%" }}/>
              <div className="d-flex flex-column flex-shrink-0 p-3 p-3 bg-white" style={{ width: "100%", marginTop: "1.5%", borderRadius: "10px", border: "1px solid #cccccc" }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div className="d-flex align-items-end" style={{ marginRight: "5%" }}>
                    <img src={test} alt="상품" style={{ width: "15%", marginRight:"5%", objectFit: "cover", display: "block", cursor: "pointer" }} onClick={() => window.location.href = `/items/detail`} />
                    <div>
                      <div>{item1} : {totalCount}개</div>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" style={{ marginRight: "3px", border: "none", background: "none", color: "black"}} onClick={() => window.location.href = `/review/update`}>수정</button>
                    <button className="btn btn-danger"style={{ border: "none", background: "none", color: "black"}} onClick={() => handleDelete(1)}>삭제</button> {/* 적절한 리뷰 ID를 전달 */}
                  </div>
                </div>
                <hr style={{ color: "#bbbbbb", backgroundColor: "#bbbbbb", border: "0.5px solid #bbbbbb", width: "100%" }}/>
                <div>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "2%" }}>
                    <StarRating/> <span style={{ fontSize: "70%", marginLeft:"1%" }}>{createdAt}</span>
                  </div>
                  <div style={{ fontWeight: "bold",  marginBottom: "2%" }}>{reviewSummary}</div>
                  <div style={{ maxHeight: "2000px", overflow: "hidden", marginBottom: "10px" }}>{reviewDetail}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
  );
}

export default ReviewList;
