import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "./firebase";
import Post from "./Post";
import Comment from "./Comment";

function PostDetail(props) {
  const { title } = useParams();
  console.log(title);
  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .where(`postTitle`, "==", `${title}`)
      .limit(1)
      .get()
      .then((snapshot) =>
        setPostDetail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {postDetail.map((info) => (
        <Post
          id={info.id}
          name={props.name}
          photoURL={props.photoURL}
          title={info.data.postTitle}
          showButton={false}
          body={info.data.postBody}
          timestamp={info.data.timestamp}
        />
      ))}
      <Comment title={title} name={props.name} photoURL={props.photoURL} />
    </div>
  );
}

export default PostDetail;
