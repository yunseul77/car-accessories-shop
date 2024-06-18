import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MemberJoin = () => {
  // 상태 선언
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // 회원가입 함수
  const handleJoin = async (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 회원가입 데이터
    const joinData = {
      loginId: username,
      name,
      password1: password,
      password2: confirmPassword,
      phone,
      email,
      address,
      role,
    };

    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(joinData),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const data = await response.json();
      console.log('회원가입 성공:', data);
      setSuccess('회원가입이 완료되었습니다. 이제 로그인해 주세요.');
      setError(null);
    } catch (error) {
      console.error('회원가입 에러:', error);
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
      setSuccess(null);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <h1 className="mb-5">차량용품</h1>
      <div className="card p-4" style={{ width: '400px' }}>
        <h5 className="text-center mb-4">회원 정보를 입력해 주세요</h5>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleJoin}>
          <div className="form-group mb-3">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-group mb-3">
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
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">휴대폰 번호</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="휴대폰 번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address">주소</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="주소"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="role">역할</label>
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="역할"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-block mt-4">
            가입 완료하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberJoin;