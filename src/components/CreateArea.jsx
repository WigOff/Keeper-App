import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import { use } from "react";

function CreateArea(props) {

  const [clicked, Setclicked] = useState(false);
  const [note, Setnote] = useState({
    id: 0,
    title: "",
    content: "",
  });

  function handleChange(event){

    const name = event.target.name;
    const value = event.target.value;

    Setnote(prev => {
      return {
        ...prev, [name] : value
      }
    })

  }

  function handleClick(){
    Setclicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked && <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>}
        <textarea name="content" placeholder="Take a note..." rows={clicked ? "3" : "1"}  onChange={handleChange} onClick={handleClick} value={note.content}/>
        <Zoom in = {clicked ? "true" : null}>
          <Fab type="button" onClick={() => {
              Setnote((prev) => {return {
                id: prev.id + 1,
                title: "",
                content: "",
              }});
              return props.click(note);
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
