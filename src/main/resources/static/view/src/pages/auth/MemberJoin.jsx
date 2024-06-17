import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberJoin = () => {
  return (
      <div
          className="d-flex flex-column align-items-center justify-content-center vh-100"
          style={{backgroundColor: '#f8f9fa'}}>
        <h1 className="mb-5">차량용품</h1>
        <div className="card p-4" style={{width: '400px'}}>
          <h5 className="text-center mb-4">회원 정보를 입력해 주세요</h5>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">이름</label>
              <input type="text" className="form-control" id="name"
                     placeholder="이름"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="username">아이디</label>
              <input type="text" className="form-control" id="username"
                     placeholder="아이디"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">비밀번호</label>
              <input type="password" className="form-control" id="password"
                     placeholder="비밀번호"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input type="password" className="form-control"
                     id="confirmPassword" placeholder="비밀번호 확인"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">휴대폰 번호</label>
              <input type="text" className="form-control" id="phone"
                     placeholder="휴대폰 번호"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="storeName">이메일</label>
              <input type="text" className="form-control" id="storeName"
                     placeholder="이메일"/>
            </div>
            <button type="submit" className="btn btn-dark btn-block mt-4">가입
              완료하기
            </button>
          </form>
        </div>
      </div>
  );
};

export default MemberJoin;