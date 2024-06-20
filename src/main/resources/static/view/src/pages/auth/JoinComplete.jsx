import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinComplete = ({ role, closePopup }) => {
  const message = role === '판매자'
    ? '로그인 후 다양한 상품들을 판매 해보세요. 감사합니다.'
    : '로그인 후 다양한 상품들을 만나보세요. 감사합니다.';

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
      <div className="card p-5" style={{ width: '360px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h5 className="text-center mb-3 fs-5" style={{ fontWeight: 'bold' }}>회원가입이 완료 되었습니다</h5>
        <div className="alert alert-light text-center text-muted mb-4" style={{ backgroundColor: '#e9ecef' }}>{message}</div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-dark w-50 me-2" onClick={() => closePopup('login')}>로그인</button>
          <button className="btn btn-light w-50" onClick={() => closePopup('main')}>메인 화면</button>
        </div>
      </div>
    </div>
  );
};

export default JoinComplete;
