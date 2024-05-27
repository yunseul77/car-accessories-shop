import axios from "axios";

// Axios 인스턴스 생성
const baseURL = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
  timeout: 10000, // 타임아웃 설정 (10초)
});

// 요청 인터셉터 추가 (예: 토큰 추가)
baseURL.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

// 응답 인터셉터 추가 (예: 공통 에러 처리)
baseURL.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        // 401 에러 처리 (예: 로그인 페이지로 리디렉션)
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
);

export default baseURL;