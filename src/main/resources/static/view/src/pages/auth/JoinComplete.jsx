import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinComplete = () => {
  return (
      <div
          className="d-flex flex-column align-items-center justify-content-center vh-100"
          style={{backgroundColor: '#f8f9fa'}}>
        <h1 className="mb-5">차량용품</h1>
        <div className="card p-5" style={{
          width: '360px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h5 className="text-center mb-3 fs-5"
              style={{fontWeight: 'bold'}}>회원가입이 완료 되었습니다</h5>
          <div className="alert alert-light text-center text-muted mb-4"
               style={{backgroundColor: '#e9ecef'}}>로그인 후 다양한 상품들을 만나보세요. 감사합니다.
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark w-50">로그인</button>
            <button className="btn btn-light w-50">메인 화면</button>
          </div>
        </div>
      </div>
  );
};

export default JoinComplete;