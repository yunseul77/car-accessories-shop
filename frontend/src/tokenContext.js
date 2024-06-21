import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie'; // js-cookie 라이브러리 가져오기

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('accessToken') || null); // 쿠키에서 액세스 토큰 가져오기

  const login = (newToken) => {
    Cookies.set('accessToken', newToken); // 쿠키에 액세스 토큰 저장
    setToken(newToken);
  };

  const logout = () => {
    Cookies.remove('accessToken'); // 쿠키에서 액세스 토큰 삭제
    setToken(null);
  };

  return (
    <TokenContext.Provider value={{ token, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
};




//코치님 예상
//Q : 왜 이렇게 했나요?
//A : 알고는 있지만 지금은 시간이 짧아서 나중에 고도화나 추가 기능에 적용 할 것 입니다.