import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  // 상태 선언
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // 로그인 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    // 로그인 데이터
    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      console.log('로그인 성공:', data);

      // 토큰을 쿠키에 저장
      document.cookie = `accessToken=${data.accessToken}; path=/; HttpOnly`;
      document.cookie = `refreshToken=${data.refreshToken}; path=/; HttpOnly`;

      // 로그인 성공 시 필요한 작업 수행
      // 예: 페이지 이동, 사용자 상태 업데이트 등
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{backgroundColor: '#f8f9fa'}}
    >
      <h1 className="mb-5">차량용품</h1>
      <div className="card p-4" style={{
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h5 className="text-center mb-4" style={{fontWeight: 'bold'}}>
          로그인 정보를 입력해 주세요
        </h5>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-dark" style={{width: '48%'}}>
              로그인
            </button>
            <button type="button" className="btn btn-light" style={{width: '48%'}}>
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
