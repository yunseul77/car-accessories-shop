import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
      <div
          className="d-flex flex-column align-items-center justify-content-center vh-100"
          style={{backgroundColor: '#f8f9fa'}}>
        <h1 className="mb-5">차량용품</h1>
        <div className="card p-4" style={{
          width: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h5 className="text-center mb-4" style={{fontWeight: 'bold'}}>로그인 정보를
            입력해 주세요</h5>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="username">아이디</label>
              <input type="text" className="form-control" id="username"
                     placeholder="아이디"/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">비밀번호</label>
              <input type="password" className="form-control" id="password"
                     placeholder="비밀번호"/>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-dark"
                      style={{width: '48%'}}>로그인
              </button>
              <button type="button" className="btn btn-light"
                      style={{width: '48%'}}>회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Login;