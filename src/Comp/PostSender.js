import React, { useState } from "react";
import { Button, Typography, Input } from "@material-ui/core";
import db from "./firebase";
import "./PostSender.css";
import firebase from "firebase";

function PostSender() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      postTitle: title,
      postBody: body,

      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <Typography variant="h3" className="heroTitle">
        Post an Issue
      </Typography>

      <form className="form" autoComplete="off">
        <Input
          className="form__input"
          id="postTile"
          value={title}
          name="title"
          label="Issue Title"
          placeholder="Issue Title"
          variant="outlined"
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          className="form__input"
          id="outlined-basic"
          value={body}
          label="Issue Detail"
          placeholder="Issue Detail"
          variant="outlined"
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <Button
          className="form__button"
          color="primary"
          fontSize="large"
          variant="contained"
          disabled={!title && !body}
          style={{ width: "85%", margin: "0px auto" }}
          onClick={addPost}
        >
          Post
        </Button>
      </form>
    </>
  );
}
export default PostSender;
