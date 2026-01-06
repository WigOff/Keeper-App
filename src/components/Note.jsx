import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in = "true">
      <Fab type = "button" onClick={() => props.delete(props.id)}>
        <DeleteIcon />
      </Fab></Zoom>
    </div>
  );
}

export default Note;
