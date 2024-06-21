import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import ReactStars from 'react-stars';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ReviewForm = () => {
  const [itemName, setItemName] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [itemImage, setItemImage] = useState('');

  useEffect(() => {
    // 임시로 아이템 데이터 설정
    const itemData = {
      name: '테스트 상품', // 임시 아이템 이름
      image: 'https://via.placeholder.com/150', // 임시 이미지 URL
    };
    setItemName(itemData.name);
    setItemImage(itemData.image);
  }, []);

  const handleImageUpload = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { itemName, summary, description, ratingValue, imageUrl };

  try {
      const response = await fetch('http://localhost:8080/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('리뷰가 성공적으로 등록되었습니다!');
      } else {
        throw new Error('리뷰 등록 중 오류 발생!');
      }
    } catch (error) {
      console.error('리뷰 등록 중 오류 발생!', error);
      alert('리뷰 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <main style={{ marginBottom: "5%" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px", width: "100%" }}>
          <div className="p-5" style={{ width: "90%", maxWidth: "900px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <h3 className="fs-4" style={{ fontWeight: "bold" }}>상품 품질 리뷰</h3>
            <h6 style={{ color: "#868e96" }}>구매한 상품에 대한 리뷰를 남겨보세요</h6>
            <br/>

            <div className="d-flex align-items-center" style={{ marginBottom: '20px' }}>
              {itemImage && <img src={itemImage} alt="아이템 이미지" style={{ maxWidth: '100px', height: 'auto', marginRight: '10px' }} />}
              <h5>{itemName}</h5>
            </div>
            <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Form.Group controlId="formRating" style={{ textAlign: 'center' }}>
                <ReactStars
                  count={5}
                  size={36}
                  value={ratingValue}
                  onChange={setRatingValue}
                  half={false}
                  color2={'#ffd700'}
                />
              </Form.Group>

              <Form.Group controlId="formImage" style={{ marginTop: '15px' }}>
                <Form.Label>사진 첨부</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleImageUpload}
                />
              </Form.Group>
              <hr/>

              <Form.Group controlId="formSummary" style={{ marginTop: '15px' }}>
                <Form.Control
                  type="text"
                  placeholder="리뷰 한 줄 요약을 입력해주세요"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
                />
              </Form.Group>

              <Form.Group controlId="formDescription" style={{ marginTop: '15px' }}>
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="상세 리뷰 내용을 입력해주세요"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" style={{ marginRight: '10px', marginTop: '20px' }}>
                  등록
                </Button>
                <Button variant="secondary" type="button" style={{ marginTop: '20px', backgroundColor: '#555', border: 'none' }}>
                  취소
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ReviewForm;
