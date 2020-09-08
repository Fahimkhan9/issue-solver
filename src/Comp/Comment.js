import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import db from './firebase';
import CommentCard from './CommentCard';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

 function Comment() {
  const classes = useStyles();
  const [comment,setComment] = useState('')
  const [commentList,setCommentList] = useState([])

  
 useEffect(() => {

    db.collection("comment").onSnapshot(snapshot =>  {
 
        setCommentList(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data : doc.data()
          }
        )))
      })
 },[])

const addComment = () => {
    db.collection("comment").add({
        comment: comment,
       

    })
}

// console.log(commentList);
  return (
      <>
       {
            commentList.map(info => <CommentCard comment={info.data.comment} /> )
      }

    <form className={classes.root}  style={{display:'flex',flexDirection:'column',alignItems:'center'}} noValidate autoComplete="off">
  
      
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setComment(e.target.value)} />
      <Button color="primary" fontSize="large" variant="contained"style={{width:'35%'}} onClick={addComment}   > Post</Button>

    </form>

    </>
  );
}
export default Comment