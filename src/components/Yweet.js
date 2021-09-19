import React, { useState } from "react";
import { dbService, storageService } from "fbInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faMinusCircle,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Yweet = ({ yweetObj, isOwner }) => {
  const [editMode, setEditMode] = useState(false);
  const [newYweet, setNewYweet] = useState(yweetObj.text);

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
      console.log(result);
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
    toggleEdit();
  };

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
            src={yweetObj.creator.photoURL}
            className="yweet-profile-img"
            alt="http://placehold.it/50x50"
          />
          <div className="yweet-title">
            {yweetObj.creator.displayName}{" "}
            <span style={{ fontWeight: "400", fontSize: "12px" }}>
              {new Date(yweetObj.createdAt).toLocaleString()}
            </span>
          </div>
          {isOwner && (
            <>
              <button className="yweet-button-delete" onClick={onDeleteClick}>
                <FontAwesomeIcon
                  style={{ fontSize: "18px" }}
                  icon={faTrashAlt}
                />
              </button>
              <button className="yweet-button-edit" onClick={toggleEdit}>
                <FontAwesomeIcon icon={faEdit} style={{ fontSize: "18px" }} />
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
        </div>
      )}
    </div>
  );
};

export default Yweet;
