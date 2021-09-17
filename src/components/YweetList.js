import React from "react";
import Yweet from "./Yweet";

const YweetList = ({ yweets, userObj }) => {
  return (
    <div>
      {yweets.map((data) => {
        return (
          <Yweet
            key={data.id}
            yweetObj={data}
            isOwner={data.creatorId === userObj.uid}
          />
        );
      })}
    </div>
  );
};

export default YweetList;
