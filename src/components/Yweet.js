import React, { useState } from "react";
import { dbService, storageService } from "fbInstance";

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
        <>
          <h4>{yweetObj.text}</h4>
          {yweetObj.attachmentUrl && (
            <img
              src={yweetObj.attachmentUrl}
              width="50px"
              height="50px"
              alt=""
            ></img>
          )}
          {isOwner ? (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEdit}>Edit</button>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Yweet;
