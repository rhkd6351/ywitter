import react, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "fbInstance";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else setIsLoggedIn(false);

      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "initializing"
      )}
      <footer>&copy; Ywitter {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
