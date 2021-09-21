import {
  faCameraRetro,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      creator: {
        uid: userObj.uid,
        displayName: userObj.displayName,
        photoURL: userObj.photoURL || "",
        parent: "",
      },
      like: 0,
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

  const onImageButtonClick = (event) => {
    image.current.click();
  };
  return (
    <div className="factory-wrapper">
      <div className="factory-title">Home</div>
      <form className="factory-form" onSubmit={onSubmit}>
        <div className="factory-form-top">
          <img
            className="user-img"
            src={
              userObj.photoURL ? userObj.photoURL : "http://placehold.it/50x50"
            }
          />
          <textarea
            placeholder="what's happening?"
            className="factory-input-text"
            value={yweet}
            onChange={onChange}
            type="text"
            maxLength={500}
          />
        </div>
        <div className="factory-form-bottom">
          <input
            className="factory-input-file"
            ref={image}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            display="none"
          ></input>
          {attachment && (
            <>
              <img className="attachment-img" src={attachment} alt="" />
              <button
                className="factory-input-button"
                onClick={onClearAttachment}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
            </>
          )}
          <input className="factory-input-submit" type="submit" value="Yweet" />
          <button
            type="button"
            className="factory-button-image"
            onClick={onImageButtonClick}
          >
            <FontAwesomeIcon
              style={{ color: "rgb(45, 155, 240)" }}
              icon={faCameraRetro}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default YweetFactory;
