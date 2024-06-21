import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../tokenContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(TokenContext); // 토큰 컨텍스트에서 로그인 함수 가져오기

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      login(data.accessToken); // 토큰 컨텍스트의 로그인 함수 호출
      navigate('/'); // 로그인 성공 시 홈 페이지로 이동
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc', // 테두리 색을 회색으로 설정
    transition: 'background-color 0.3s, color 0.3s',
    width: '48%'
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#343a40';
    e.target.style.color = '#fff';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#000';
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="mb-5">차량용품</h1>
      <div className="card p-4" style={{
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h5 className="text-center mb-4" style={{ fontWeight: 'bold' }}>로그인 정보를 입력해 주세요</h5>
        {error && <div className="alert alert-danger">{error}</div>} {/* 에러 메시지 표시 */}
        <form onSubmit={handleLogin}> {/* 폼 제출 이벤트 처리 */}
          <div className="form-group mb-3">
            <label htmlFor="username">아이디</label>
            <input type="text" className="form-control" id="username" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password">비밀번호</label>
            <input type="password" className="form-control" id="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              로그인
            </button>
            <button
              type="button"
              className="btn"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate('/auth/select')}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
