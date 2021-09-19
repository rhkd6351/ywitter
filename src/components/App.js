import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "fbInstance";

import "css/common.css";
import "css/home.css";
import "css/navigation.css";
import "css/auth.css";
import "css/yweetFactory.css";
import "css/yweet.css";
import "css/right.css";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) setUserObj(user);
      else setUserObj(null);
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.getAuth().currentUser;
    setUserObj(Object.assign({}, user)); //이렇게 복제된 객체는 updateProfile에 넘길 때 오류발생.. 다시 user 원본으로 업데이트 시켜주는 작업 뒤에 진행
    setUserObj(user);
  };

  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "initializing"
      )}
    </>
  );
};

export default App;
