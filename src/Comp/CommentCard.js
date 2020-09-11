import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

import './CommentCard.css'


 function CommentCard(props) {

  



  return (
    <Card className='card' variant="outlined">
      <CardContent>
          <div  style={{display:"flex",alignItems:'center'}}>
              <Avatar src={props.photoURL}/>
              <Typography style={{marginLeft:'5px'}}>
                  {props.name}
              </Typography>
          </div>
          <small>{new Date(props.timestamp?.toDate()).toUTCString()}</small>
        <Typography variant="h5" >
         {props.comment}
        </Typography>
        
    
      </CardContent>
     
    </Card>
  );
}
export default CommentCard