import { dbService, storageService } from "fbInstance";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const YweetFactory = ({ userObj }) => {
  const [yweet, setYweet] = useState("");
  const [attachment, setAttachment] = useState(null);
  const image = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== null) {
      const attachmentRef = storageService.ref(
        storageService.getStorage(),
        `${userObj.uid}/${uuidv4()}`
      );
      const response = await storageService.uploadString(
        attachmentRef,
        attachment,
        "data_url"
      );
      attachmentUrl = await storageService.getDownloadURL(response.ref);
    }
    const yweetObj = {
      text: yweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    dbService.addDoc(
      dbService.collection(dbService.getFirestore(), "yweet"),
      yweetObj
    );
    setYweet("");
    onClearAttachment();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setYweet(value);
  };

  const onFileChange = (event) => {
    if (!event) {
      console.log((image.current.value = ""));
    } else {
      const {
        target: { files },
      } = event;
      const theFile = files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = (finishedEvent) => {
        const {
          target: { result },
        } = finishedEvent;
        setAttachment(result);
      };
      fileReader.readAsDataURL(theFile);
    }
  };

  const onClearAttachment = () => {
    setAttachment(null);
    onFileChange(null);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={yweet}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <input type="submit" value="Yweet" />
      <input
        ref={image}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      ></input>
      {attachment && (
        <>
          <img src={attachment} width="50px" height="50px" alt="" />
          <button onClick={onClearAttachment}>clear attachment</button>
        </>
      )}
    </form>
  );
};

export default YweetFactory;
