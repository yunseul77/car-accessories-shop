import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JoinTypeSelection = () => {
  return (
      <div
          className="d-flex flex-column align-items-center justify-content-center vh-100"
          style={{backgroundColor: '#f8f9fa', padding: '20px'}}>
        <h1 className="mb-4" style={{fontSize: '2.5rem'}}>차량용품</h1>
        <div className="card p-5" style={{
          width: '350px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px'
        }}>
          <h5 className="text-center mb-4"
              style={{fontSize: '1rem', fontWeight: "bold"}}>가입하실 유형을
            선택해 주세요</h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark px-4 py-2" style={{width: '48%'}}>일반
              회원
            </button>
            <button className="btn btn-light px-4 py-2"
                    style={{width: '48%'}}>판매자
            </button>
          </div>
        </div>
      </div>
  );
};

export default JoinTypeSelection;