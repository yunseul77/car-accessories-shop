import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const JoinTypeSelection = () => {
const navigate = useNavigate();

const handleSelect = (role) => {
navigate('/auth/signup', { state: { role } });
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
<div className="d-flex flex-column align-items-center justify-content-center vh-100"
style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
<h1 className="mb-4" style={{ fontSize: '2.5rem' }}>차량용품</h1>
<div className="card p-5" style={{
width: '350px',
boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
borderRadius: '10px'
}}>
<h5 className="text-center mb-4" style={{ fontSize: '1rem', fontWeight: "bold" }}>
가입하실 유형을 선택해 주세요
</h5>
<div className="d-flex justify-content-between">
<button
className="btn"
style={buttonStyle}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
onClick={() => handleSelect('일반회원')}
>
일반 회원
</button>
<button
className="btn"
style={buttonStyle}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
onClick={() => handleSelect('판매자')}
>
판매자
</button>
</div>
</div>
</div>
);
};

export default JoinTypeSelection;

