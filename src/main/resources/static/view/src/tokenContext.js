import React, { createContext, useState } from 'react';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);  //쿠키에서 가져오기 - 코치님

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');  //쿠키에서 삭제하기 - 코치님
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