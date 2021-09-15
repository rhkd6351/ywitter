import { render } from "@testing-library/react";
import Yweet from "components/Yweet";
import { dbService } from "fbInstance";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [yweets, setYweets] = useState([]);
  const [yweet, setYweet] = useState("");

  useEffect(async () => {
    // const yweetSnapshot = await dbService.getDocs(
    //   dbService.collection(dbService.getFirestore(), "yweet")
    // );
    dbService.onSnapshot(
      dbService.collection(dbService.getFirestore(), "yweet"),
      (docs) => {
        const yweets = docs.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        setYweets(yweets);
      }
    );
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    try {
      const addYweet = dbService.addDoc(
        dbService.collection(dbService.getFirestore(), "yweet"),
        {
          text: yweet,
          createdAt: Date.now(),
          creatorId: userObj.uid,
        }
      );
    } catch (e) {
      console.log(e);
    }
    setYweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setYweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={yweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Yweet" />
      </form>
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
    </div>
  );
};

export default Home;
