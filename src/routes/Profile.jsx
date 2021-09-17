import React, { useEffect, useState } from "react";
import { authService, dbService } from "fbInstance";
import { useHistory } from "react-router";
import Yweet from "components/Yweet";
import YweetList from "components/YweetList";

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
      dbService.where("creatorId", "==", userObj.uid),
      dbService.orderBy("createdAt")
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
  });

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          name="inputDisplayName"
          type="text"
          onChange={onChangeHandler}
          value={inputDisplayName}
        />
        <input type="submit" value="change" />
      </form>
      <button onClick={onLogOutClick}>Log out</button>
      <YweetList yweets={myYweets} userObj={userObj} />
    </>
  );
};

export default Profile;
