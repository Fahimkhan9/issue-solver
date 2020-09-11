import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Typography, Input, useMediaQuery } from "@material-ui/core";
import db from "./firebase";
import "./PostSender.css";
import { useForm } from "react-hook-form";

function PostSender() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id,setId] = useState(0)
  const matches = useMediaQuery("(min-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        // margin: theme.spacing(1),
        // margin: '10px',
        // width: "45%",
      },
    },
  }));
  const addPost = (e) => {
    e.preventDefault();
  setId(pre => pre + 1)
    db.collection("posts").add({
      postTitle: title,
      postBody: body,
      id: id,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTitle("");
    setBody("");
  };
  console.log(id);
  const classes = useStyles();
  const handleBlur = (e) => {};
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <Typography variant="h3" className="heroTitle">
        Post an Issue
      </Typography>

      <form
        className="form"
        autoComplete="off"
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
      >
        <Input
        className="form__input"
          id="postTile"
          value={title}
          label="Issue Title"
          placeholder="Issue Title"
          variant="outlined"
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
        className='form__button'
          color="primary"
          fontSize="large"
          variant="contained"
          disabled={!title && !body}
           style={{ width: "85%",margin:"0px auto" }}
          onClick={addPost}
        >
          Post
        </Button>
      </form> 
     
    </>
  );
}
export default PostSender;
