import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState([]);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function getData() {
    axios
      .get("http://localhost:3000/api/note")
      .then((res) => {
        console.log(res.data.note);
        setNote(res.data.note);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  function submitHandle(e) {
    e.preventDefault();

    const { title, desc } = e.target.elements;
    axios
      .post("http://localhost:3000/api/note", {
        title: title.value,
        desc: desc.value,
      })
      .then(() => {
        getData();

        setTitle("");
        setDesc("");
      });
  }

  function deleteHandle(noteID) {
    axios.delete("http://localhost:3000/api/note/" + noteID).then((res) => {
      console.log(res.data);
      getData();
    });
  }

  function editHandle(noteID) {
    const newTitle = prompt("Update title");
    const newDesc = prompt("Update desc");

    axios
      .patch("http://localhost:3000/api/note/" + noteID, {
        title: newTitle,
        desc: newDesc,
      })
      .then((res) => {
        res.data;
        getData();
      });
  }

  return (
    <>
      <form onSubmit={submitHandle} className="from">
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title.."
        />
        <input
          name="desc"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter Desc..."
        />
        <input type="submit" value="Create Note" />
      </form>
      <div className="notes">
        {note.map((note) => (
          <div className="note" key={note._id}>
            <h1>Title : {note.title}</h1>
            <p>Desc : {note.desc}</p>
            <span className="btn">
              <button onClick={() => deleteHandle(note._id)} className="red">
                Delete
              </button>
              <button onClick={() => editHandle(note._id)} className="blue">
                Edit
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
