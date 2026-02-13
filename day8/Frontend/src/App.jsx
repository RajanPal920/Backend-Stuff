import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
  });

  function fetchNotes() {
    axios.get("http://localhost:3000/notes").then((res) => {
      setNotes(res.data.note);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function HandleSumit(e) {
    e.preventDefault();

    if (editId) {
      axios
        .patch(`http://localhost:3000/notes/${editId}`, formData)
        .then(() => {
          fetchNotes();
          resetForm();
        });
    } else {
      const { title, desc, price } = e.target.elements;
      axios
        .post("http://localhost:3000/notes", {
          title: title.value,
          desc: desc.value,
          price: price.value,
        })
        .then(() => {
          fetchNotes();
          resetForm();
        });
    }
    setFormData("");
  }

  function resetForm() {
    setFormData({ title: "", desc: "", price: "" });
    setEditId(null);
  }

  function deleteHandle(noteID) {
    axios.delete("http://localhost:3000/notes/" + noteID).then((res) => {
      res.data;

      fetchNotes();
    });
  }

  function editHandle(note) {
    setEditId(note._id);
    setFormData({
      title: note.title,
      desc: note.desc,
      price: note.price,
    });
  }

  return (
    <>
      <form onSubmit={HandleSumit} className="note-create-form">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          name="title"
          placeholder="Enter title"
        />
        <input
          type="text"
          value={formData.desc}
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          name="desc"
          placeholder="Enter description"
        />
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          name="price"
          placeholder="Enter price"
        />
        <button>{editId ? "Update Note" : "Create Note"}</button>
      </form>

      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div key={index} className="note">
              <h1>{note.title}</h1>
              <h4>{note.desc}</h4>
              <p>{note.price}</p>
              <div className="delete">
                <button onClick={() => deleteHandle(note._id)}>Delete</button>
                <button onClick={() => editHandle(note)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
