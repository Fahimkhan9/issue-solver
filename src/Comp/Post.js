import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Post.css";

function Post(props) {
  return (
    <div className="">
      <Card className="post" variant="outlined">
        <CardContent>
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={props.photoURL} />
            <Typography variant="h6" style={{ marginLeft: "5px" }}>
              {props.name}
            </Typography>
          </div>
          <small>{new Date(props.timestamp?.toDate()).toUTCString()}</small>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>

          <br />
          <hr />
          <Typography style={{ fontSize: "30px" }} component="p">
            {props.body}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={"/post/" + props.title}>
            {props.showButton && (
              <Button
                size="large"
                style={{ textDecoration: "none" }}
                variant="contained"
                color={props.index % 2 === 0 ? `primary` : `default`}
              >
                See Details
              </Button>
            )}
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default Post;
