import React, { useState } from "react";
import { dbService } from "fbInstance";

const Yweet = ({ yweetObj, isOwner }) => {
  const [editMode, setEditMode] = useState(false);

  const onDeleteClick = () => {
    const ok = window.confirm("are you sure?");
    if (ok) {
      dbService.deleteDoc(
        dbService.doc(dbService.getFirestore(), "yweet", yweetObj.id)
      );
    }
  };

  return (
    <div>
      <h4>{yweetObj.text}</h4>
      {isOwner ? (
        <>
          <button onClick={onDeleteClick}>Delete</button>
          <button>Edit</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Yweet;
