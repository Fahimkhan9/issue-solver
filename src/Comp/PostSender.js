import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import db from './firebase';
import firebase from './firebase'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45%',

    },

  },
}));

 function PostSender() {
     const [title,setTitle] = useState('')
     const [body,setBody] = useState('')


const addPost= (e) => {
e.preventDefault()

db.collection("posts").add({
    postTitle:  title,
    postBody: body,
    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
})
setTitle('')
setBody("")
}
  const classes = useStyles();

  return (
    <>
    
    <Typography variant="h3" style={{textAlign:"center"}} >Post an Issue</Typography>
    <form className={classes.root} noValidate autoComplete="off" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

     <TextField id="postTile" value={title} label="Add an Issue" variant="outlined" onChange={(e) => setTitle(e.target.value)} />

     <TextField id="outlined-basic" value={body} label="Add an Issue" variant="outlined" onChange={(e) => setBody(e.target.value)} />
      <Button color="primary" fontSize="large" variant="contained"style={{width:'35%'}} onClick={addPost}> Post</Button>
    </form>
    </>
  );
}
export default PostSender