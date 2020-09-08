import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from './firebase'
import Post from './Post';
import Comment from './Comment';

function PostDetail() {
    const {title} = useParams()
    console.log(title);
    const [postDetail,setPostDetail] = useState([])
 useEffect(() => {
     db.collection("posts").where("postTitle", "==", `${title}`)
     .get()
     .then(snapshot =>(
setPostDetail(
    snapshot.docs.map(doc => (
  
        {
            id: doc.id,
            data: doc.data()
        }
    ) 
)
)
     ))
     .catch(err => console.log(err))
 },[])

    return (
        <div>
            {title} coming soon
          {
              postDetail.map(info => <Post title={info.data.postTitle} showButton={false} body={info.data.postBody}  />)
          }
          <Comment/>
        </div>
    )
}

export default PostDetail
