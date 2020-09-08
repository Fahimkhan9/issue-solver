import React,{useState, useEffect} from 'react'
import Header from './Comp/Header'
import Post from './Comp/Post'
import {BrowserRouter as Router,Switch,Route, useLocation} from 'react-router-dom'
import PostDetail from './Comp/PostDetail'
import db from './Comp/firebase'
import PostSender from './Comp/PostSender'
import { Typography } from '@material-ui/core'

function App() {
  const [post,setPost] = useState([])
// const location  = useLocation()
useEffect(() => {

db.collection("posts").onSnapshot(snapshot =>  {
 
  setPost(snapshot.docs.map(doc => (
    {
      id: doc.id,
      data : doc.data()
    }
  )))
})


},[])
console.log(post);
  return (
    <div>
      <Router>
      <Header/>
     
<Switch>
  <Route exact path="/">
  <PostSender/>
  <Typography variant="h3" style={{textAlign:"center"}}>Issues</Typography>
  {
  post.map((info,index) =>  
    <Post showButton={true} title={info.data.postTitle} body={info.data.postBody} userName={info.data.userName} profileImg={info.data.profileImg} index={index} />
  )
}
  </Route>
  <Route exact  path="/post/:title">
    <PostDetail/>
  </Route>
</Switch>

      </Router>
   
    </div>
  )
}

export default App
