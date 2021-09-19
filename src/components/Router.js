import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   라우트 기능만 하는것이 적합, 스테이트 관리는 상위 컴포넌트로 빼준다.
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <div className="home-wrapper">
            <Navigation userObj={userObj} />
            <Fragment>
              <Route exact path="/">
                <Home userObj={userObj} />
              </Route>
              <Route exact path="/profile">
                <Profile refreshUser={refreshUser} userObj={userObj} />
              </Route>
            </Fragment>
            <div className="align-right">Pull-Right content</div>
          </div>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
