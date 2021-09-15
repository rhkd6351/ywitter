import React from "react";
import { authService } from "fbInstance";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const onLogOutClick = async () => {
    await authService.getAuth().signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};
