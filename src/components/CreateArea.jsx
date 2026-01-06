import React, { useState } from "react";

function CreateArea(props) {


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

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button type="button" onClick={() => {
          Setnote((prev) => {return {
            id: prev.id + 1,
            title: "",
            content: "",
          }});
          return props.click(note);
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
