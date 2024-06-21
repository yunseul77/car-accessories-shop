import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const MemberJoin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    loginId: '',
    password1: '',
    password2: '',
    phone: '',
    email: '',
    address: '',
    role: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state && location.state.role) {
      setFormData({ ...formData, role: location.state.role });
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/signup', formData);
      // 가입 완료 후 JoinComplete 컴포넌트로 이동
      navigate('/auth/join-complete', { state: { role: formData.role } });
    } catch (err) {
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const buttonStyle = {
    backgroundColor: '#f0f0f0', // 기본 배경색을 연한 회색으로 설정
    color: '#000',
    border: '1px solid #ccc', // 테두리 색을 회색으로 설정
    transition: 'background-color 0.3s, color 0.3s',
    width: '50%' // 중앙에 배치되도록 설정
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#343a40';
    e.target.style.color = '#fff';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#f0f0f0';
    e.target.style.color = '#000';
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <h1 className="mb-5">회원가입</h1>
      <div className="card p-4" style={{ width: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h5 className="text-center mb-4">회원 정보를 입력해 주세요</h5>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">이름</label>
            <input type="text" className="form-control" id="name" placeholder="이름" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="loginId">아이디</label>
            <input type="text" className="form-control" id="loginId" placeholder="아이디" value={formData.loginId} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password1">비밀번호</label>
            <input type="password" className="form-control" id="password1" placeholder="비밀번호" value={formData.password1} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password2">비밀번호 확인</label>
            <input type="password" className="form-control" id="password2" placeholder="비밀번호 확인" value={formData.password2} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">휴대폰 번호</label>
            <input type="text" className="form-control" id="phone" placeholder="휴대폰 번호" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">이메일</label>
            <input type="text" className="form-control" id="email" placeholder="이메일" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">주소</label>
            <input type="text" className="form-control" id="address" placeholder="주소" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="role">회원가입 유형</label>
            <input type="text" className="form-control" id="role" placeholder="회원가입 유형" value={formData.role} readOnly />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              가입 완료하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberJoin;




