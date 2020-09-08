import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PostSender from './PostSender';

const useStyles = makeStyles({
  root: {
    width: '50%',
  
    margin: '20px auto'

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

 function Post(props) {
  const classes = useStyles();
  

  return (
    <div className="">

 <Card className={classes.root} variant="outlined">
      <CardContent>
      <div className="" style={{display: 'flex',alignItems:"center"}}>
      <Avatar src={props.profileImg} />
       <Typography variant="h4" style={{marginLeft: '5px'}}>
         {props.userName}
       </Typography>
      </div>
        <Typography variant="h5" component="h2">
         {props.title}
        </Typography>
       <br/>
        <Typography variant="body2" component="p">
         {props.body}
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/post/"+ props.title}>
    { props.showButton &&  
        <Button size="large" style={{textDecoration:"none"}} variant="contained"   color={props.index % 2 === 0 ? `primary` : `default`}>
          See Details
           
         
            </Button>
            }
             </Link>
      </CardActions>
    </Card>

    </div>
   
  );
}
export default Post