import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbInstance";
import { useHistory } from "react-router";
import YweetList from "components/YweetList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBackspace,
  faLongArrowAltLeft,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [myYweets, setMyYweets] = useState([]);
  const [inputDisplayName, setInputDisplayName] = useState(userObj.displayName);

  const onLogOutClick = async () => {
    await authService.getAuth().signOut();
    history.push("/");
  };

  const getMyYweets = () => {
    // dbService.onSnapshot(
    const yweetRef = dbService.collection(dbService.getFirestore(), "yweet");
    const query = dbService.query(
      yweetRef,
      dbService.where("creator.uid", "==", userObj.uid),
      dbService.orderBy("createdAt", "desc")
    );

    dbService.getDocs(query).then((result) => {
      const yweets = result.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setMyYweets(yweets);
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    authService
      .updateProfile(userObj, {
        displayName: event.target.inputDisplayName.value,
      })
      .then((result) => {
        refreshUser();
      });
  };

  const onChangeHandler = (event) => {
    const {
      target: { value },
    } = event;

    setInputDisplayName(value);
  };

  useEffect(() => {
    getMyYweets();
  }, []);

  return (
    <div className="profile-wrapper align-center">
      <div className="profile-header">
        <button className="backward-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="profile-header-title">
          <div className="profile-header-username">{userObj.displayName}</div>
          <div className="profile-header-yweet">{myYweets.length} yweet</div>
        </div>
      </div>
      <div className="profile-background"></div>
      <div className="profile-userInfo">
        <img className="profile-user-img" src={userObj.photoURL} />
        <form className="profile-edit-form" onSubmit={onSubmitHandler}>
          <label className="profile-edit-form-label">name</label>
          <input
            className="profile-edit-form-text"
            name="inputDisplayName"
            type="text"
            onChange={onChangeHandler}
            value={inputDisplayName}
          />
          <button className="profile-edit-form-submit" type="submit">
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button
            className="profile-edit-form-logout"
            type="button"
            onClick={onLogOutClick}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </form>
      </div>
      <YweetList yweets={myYweets} userObj={userObj} />
    </div>
  );
};

export default Profile;
