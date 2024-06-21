import React, { useState } from 'react';
import axios from 'axios';

const TitleImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://34.47.72.152/titleImageUrl', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('이미지 업로드 성공:', response.data);
            // 이미지 업로드 성공 시 처리
        } catch (error) {
            console.error('Title Image 업로드 실패:', error);
            // 업로드 실패 시 처리
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>제목에 들어갈 이미지 업로드</button>
        </div>
    );
};

export default TitleImageUpload;
