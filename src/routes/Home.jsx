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
      query,
      (result) => {
        const yweets = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setYweets(yweets);
      }
      // dbService.getDocs(query).then((result) => {
      //   const yweets = result.docs.map((doc) => {
      //     return {
      //       id: doc.id,
      //       ...doc.data(),
      //     };
      //   });
      //   setYweets(yweets);
      // })
    );
  }, []);

  return (
    <>
      <div className="align-center">
        <YweetFactory userObj={userObj} />
        <YweetList yweets={yweets} userObj={userObj} />
      </div>
    </>
  );
};

export default Home;
