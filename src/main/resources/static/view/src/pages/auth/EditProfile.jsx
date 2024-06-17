import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    userId: '',
    passwordCurrent: '',
    passwordNew: '',
    passwordConfirm: '',
    phone: ''
  });

  useEffect(() => {
    // 가상의 데이터를 이용한 사용자 정보 설정
    const simulatedUserData = {
      username: 'John Doe',
      userId: 'johndoe123',
      phone: '010-1234-5678' // 기타 필드는 필요에 따라 추가 가능
      // 비밀번호 관련 정보는 보안상의 이유로 가져오지 않습니다.
    };

    setUserInfo(simulatedUserData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정된 사용자 정보 제출 로직
    console.log(userInfo);
    // 여기서 서버로 데이터를 전송할 수 있습니다.
  };

  const handleWithdrawal = () => {
    // 회원 탈퇴 로직을 처리하는 함수
    console.log('회원 탈퇴');
    // 여기서 실제 회원 탈퇴 API 호출 등의 로직을 구현할 수 있습니다.
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: "5%" }}>
        <div className="b-example-divider"></div>
        <div className="row">
          <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "14%", minHeight: "300px", maxHeight: "600px", overflowY: "auto", marginLeft: "17%" }}>
            <a href="#" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
              <span className="fs-4" style={{ fontWeight: "bold" }}>마이페이지</span>
            </a>
            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="/order" className="nav-link link-body-emphasis" aria-current="page">주문목록</a>
              </li>
              <li>
                <a href="/order" className="nav-link active">회원정보 조회/수정</a>
              </li>
              <li>
                <a href="/order" className="nav-link link-body-emphasis">작성리뷰 목록</a>
              </li>
            </ul>
            <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
          </div>
          <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "48%", marginLeft: "2%" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>회원정보 조회/수정</h3>
            <hr />
            <Form onSubmit={handleSubmit} style={{ margin: '5% auto', width: '100%' }}>
              <Form.Group controlId="formUsername">
                <Form.Label>이름</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formUserId" style={{ marginTop: '15px' }}>
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  type="text"
                  name="userId"
                  value={userInfo.userId}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCurrentPassword" style={{ marginTop: '15px' }}>
                <Form.Label>현재 비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordCurrent"
                  value={userInfo.passwordCurrent}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formNewPassword" style={{ marginTop: '15px' }}>
                <Form.Label>새 비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordNew"
                  value={userInfo.passwordNew}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" style={{ marginTop: '15px' }}>
                <Form.Label>새 비밀번호 확인</Form.Label>
                <Form.Control
                  type="password"
                  name="passwordConfirm"
                  value={userInfo.passwordConfirm}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhone" style={{ marginTop: '15px' }}>
                <Form.Label>휴대폰 번호</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex justify-content-between mt-3">
                <div>
                  <Button variant="primary" type="submit">
                    수정 완료
                  </Button>
                  <Button variant="secondary" className="ms-2">
                    취소
                  </Button>
                </div>
                <Button variant="danger" onClick={handleWithdrawal}>
                  회원 탈퇴
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EditProfile;
