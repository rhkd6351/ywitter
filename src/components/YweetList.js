import React from "react";
import Yweet from "./Yweet";

const YweetList = ({ yweets, userObj }) => {
  return (
    <div className="yweet-list">
      {yweets.map((data) => {
        return (
          <Yweet
            key={data.id}
            yweetObj={data}
            isOwner={data.creator.uid === userObj.uid}
            userObj={userObj}
          />
        );
      })}
    </div>
  );
};

export default YweetList;
