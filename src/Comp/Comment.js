import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import db from "./firebase";
import CommentCard from "./CommentCard";
import "./Comment.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },
}));

function Comment(props) {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [uniqueCommentName, setUniqueCommmentName] = useState(1);

  useEffect(() => {
    db.collection(`comment${props.title}`).onSnapshot((snapshot) => {
      setCommentList(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const addComment = () => {
    setUniqueCommmentName((pre) => pre + 1);
    db.collection(`comment${props.title}`).add({
      comment: comment,
    });
    setComment("")
  };
  console.log(uniqueCommentName);

  // console.log(commentList);
  return (
    <>
      {commentList.map((info) => (
        <CommentCard
          comment={info.data.comment}
          name={props.name}
          photoURL={props.photoURL}
        />
      ))}

      <form className="comment__form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Add a Comment"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className="comment__button"
          style={{ width: "90%", margin: "10px auto" }}
          color="primary"
          fontSize="large"
          variant="contained"
          disabled={!comment}
          onClick={addComment}
        >
        
          Post
        </Button>
      </form>
    </>
  );
}
export default Comment;
