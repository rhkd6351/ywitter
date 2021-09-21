import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fbInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faThumbsUp as faThumbsUpSolid,
} from "@fortawesome/free-solid-svg-icons";

const Yweet = ({ yweetObj, isOwner, userObj }) => {
  const [editMode, setEditMode] = useState(false);
  const [newYweet, setNewYweet] = useState(yweetObj.text);
  const [isLiked, setIsLiked] = useState(false);
  const [isReYweeted, setisReYweeted] = useState(false);
  const [likeObj, setLikeObj] = useState();
  const [reYweetObj, setReYweetObj] = useState();

  const onDeleteClick = async () => {
    const ok = window.confirm("are you sure?");
    if (ok) {
      dbService.deleteDoc(
        dbService.doc(dbService.getFirestore(), "yweet", yweetObj.id)
      );
      const response = storageService.ref(
        storageService.getStorage(),
        yweetObj.attachmentUrl
      );
      const result = await storageService.deleteObject(response);
    }
  };

  const onEditClick = () => {};

  const toggleEdit = () => setEditMode((prev) => !prev);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewYweet(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dbService.updateDoc(
      dbService.doc(dbService.getFirestore(), "yweet", yweetObj.id),
      { text: newYweet }
    );
    dbService.toggleEdit();
  };

  const onLikeClick = () => {
    const yweetDoc = dbService.doc(
      dbService.getFirestore(),
      "yweet",
      yweetObj.id
    );
    if (!isLiked) {
      setIsLiked(true);
      dbService
        .addDoc(dbService.collection(dbService.getFirestore(), "like"), {
          uid: userObj.uid,
          yweetId: yweetObj.id,
          regDate: Date.now(),
        })
        .then((result) => {
          setLikeObj({
            id: result.id,
            uid: userObj.uid,
            yweetId: yweetObj.id,
          });
          dbService.updateDoc(yweetDoc, { like: yweetObj.like + 1 });
        });
    } else {
      const likeDoc = dbService.doc(
        dbService.getFirestore(),
        "like",
        likeObj.id
      );
      setIsLiked(false);
      dbService.deleteDoc(likeDoc);
      dbService.updateDoc(yweetDoc, { like: yweetObj.like - 1 });
    }
  };

  const checkIsLiked = () => {
    const collection = dbService.collection(dbService.getFirestore(), "like");
    const query = dbService.query(
      collection,
      dbService.where("uid", "==", userObj.uid),
      dbService.where("yweetId", "==", yweetObj.id)
    );

    dbService.getDocs(query).then((result) => {
      if (result.docs.length > 0) {
        setIsLiked(true);
        setLikeObj({ id: result.docs[0].id, ...result.docs[0] });
      }
    });
  };

  const checkIsReYweeted = () => {
    const collection = dbService.collection(
      dbService.getFirestore(),
      "reyweet"
    );
    const query = dbService.query(
      collection,
      dbService.where("uid", "==", userObj.uid),
      dbService.where("yweetId", "==", yweetObj.id)
    );

    dbService.getDocs(query).then((result) => {
      if (result.docs.length > 0) {
        setisReYweeted(true);
        setReYweetObj({ id: result.docs[0].id, ...result.docs[0] });
      }
    });
  };

  const onReYweetClick = () => {
    if (!isReYweeted) {
      dbService
        .addDoc(dbService.collection(dbService.getFirestore(), "reyweet"), {
          uid: userObj.uid,
          yweetId: yweetObj.id,
          regDate: Date.now(),
        })
        .then((result) => {
          setReYweetObj({
            id: result.id,
            yweetId: yweetObj.id,
            uid: userObj.uid,
          });
        });
      setisReYweeted(true);
    } else {
      const reYweetRef = dbService.doc(
        dbService.getFirestore(),
        "reyweet",
        reYweetObj.id
      );
      dbService.deleteDoc(reYweetRef);
      setisReYweeted(false);
    }
  };

  useEffect(() => {
    checkIsLiked();
    checkIsReYweeted();
  }, []);

  return (
    <div>
      {editMode ? (
        isOwner && (
          <>
            <form onSubmit={onSubmit}>
              <input
                onChange={onChange}
                type="text"
                value={newYweet}
                required
              ></input>
              <input type="submit" value="edit" onClick={onEditClick}></input>
            </form>
            <button onClick={toggleEdit}>Cancel</button>
          </>
        )
      ) : (
        <div className="yweet-wrapper">
          <img
            src={
              yweetObj.creator.photoURL
                ? yweetObj.creator.photoURL
                : "http://placehold.it/50x50"
            }
            className="yweet-profile-img"
          />
          <div className="yweet-title">
            {yweetObj.creator.displayName}{" "}
            <span
              style={{ color: "gray", fontWeight: "400", fontSize: "12px" }}
            >
              {new Date(yweetObj.createdAt).toLocaleTimeString()}
            </span>
          </div>
          {isOwner && (
            <>
              <button className="yweet-button-delete" onClick={onDeleteClick}>
                <FontAwesomeIcon
                  style={{ fontSize: "14px" }}
                  icon={faTrashAlt}
                />
              </button>
              <button className="yweet-button-edit" onClick={toggleEdit}>
                <FontAwesomeIcon icon={faEdit} style={{ fontSize: "14px" }} />
              </button>
            </>
          )}
          <div className="yweet-text">{yweetObj.text}</div>
          {yweetObj.attachmentUrl && (
            <img
              className="yweet-attachment"
              src={yweetObj.attachmentUrl}
              alt=""
            ></img>
          )}
          <div className="yweet-bottom-bar">
            <div className="yweet-bottom-element">
              {isLiked ? (
                <>
                  <FontAwesomeIcon
                    onClick={onLikeClick}
                    className="yweet-like-button-filled"
                    icon={faThumbsUpSolid}
                  ></FontAwesomeIcon>
                  <span style={{ fontSize: "9px" }}> {yweetObj.like}</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    onClick={onLikeClick}
                    className="yweet-like-button"
                    icon={faThumbsUp}
                  ></FontAwesomeIcon>
                  <span style={{ fontSize: "9px" }}> {yweetObj.like}</span>
                </>
              )}
            </div>
            <div className="yweet-bottom-element">
              {isReYweeted ? (
                <FontAwesomeIcon
                  onClick={onReYweetClick}
                  className="yweet-reyweet-button reyweeted"
                  icon={faRetweet}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={onReYweetClick}
                  className="yweet-reyweet-button"
                  icon={faRetweet}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Yweet;
