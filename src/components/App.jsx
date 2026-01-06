import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, Setnotes] = useState([]);

  function addNote(note){
    Setnotes((prev) => {
      return [...prev, note]
    });
  }

  function createNote(note){
    return <Note key = {note.id} id = {note.id} title = {note.title} content = {note.content} delete={deleteNode}/>
  }

  function deleteNode(id){
    Setnotes((prev) => {
      console.log(id);
      return prev.filter((instance) => {
        return instance.id != id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea click = {addNote}/>
      {notes.map((value, index) => {
        return createNote(value, index);
      })}
      <Footer />
    </div>
  );
}

export default App;
