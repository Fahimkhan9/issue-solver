import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import db from './firebase';
const useStyles = makeStyles({
  root: {
    width:"48%",
    margin:'0px auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function CommentCard(props) {
  const classes = useStyles();
  const [likeCount,setLikeCount] = useState(0)
  const [likeColor,setLikeColor] = useState('')
const addLike = () =>  {
setLikeCount(pre => likeCount ? pre - 1 : pre   +1)
setLikeColor(pre => likeColor? '' : "primary")

}

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <div className="" style={{display:"flex",alignItems:'center'}}>
              <Avatar/>
              <Typography style={{marginLeft:'5px'}}>
                  UserName
              </Typography>
          </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {props.comment}
        </Typography>
        
    
      </CardContent>
      <CardActions style={{alignItems:'center'}} onClick={addLike}  >
          <IconButton >
  <b>{likeCount}</b>
             <ThumbUpIcon color={likeColor} />
             
          </IconButton>
      </CardActions>
    </Card>
  );
}
export default CommentCard