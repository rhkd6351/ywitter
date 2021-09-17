import YweetFactory from "components/YweetFactory";
import YweetList from "components/YweetList";
import { dbService } from "fbInstance";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [yweets, setYweets] = useState([]);

  useEffect(() => {
    const yweetRef = dbService.collection(dbService.getFirestore(), "yweet");
    const query = dbService.query(
      yweetRef,
      dbService.orderBy("createdAt", "desc")
    );

    dbService.onSnapshot(
      yweetRef,
      dbService.getDocs(query).then((result) => {
        const yweets = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setYweets(yweets);
      })
    );
  });

  return (
    <>
      <YweetFactory userObj={userObj} />
      <YweetList yweets={yweets} userObj={userObj} />
    </>
  );
};

export default Home;
