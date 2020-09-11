import React, { useState, useEffect, createContext } from "react";
import Header from "./Comp/Header";
import Post from "./Comp/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./Comp/PostDetail";
import db, { auth, googleProvider } from "./Comp/firebase";
import PostSender from "./Comp/PostSender";
import { Typography } from "@material-ui/core";
import Login from "./Comp/Login";
import PrivateRoute from "./Comp/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [post, setPost] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const signin = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUserInfo(res.user);
        setIsSignedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signout = () => {
    if (window.confirm("Are you want to SIGNOUT?")) {
      auth
        .signOut()
        .then((res) => {
          setIsSignedIn(false);
        })
        .catch((err) => alert(err));
    }
   
  };

  return (
    <div>
      <Router>
        <UserContext.Provider value={[isSignedIn, setIsSignedIn]}>
          <Switch>
            <Route exact path="/">
              {isSignedIn ? (
                <>
                  <Header
                    name={userInfo.displayName}
                    photoURL={userInfo.photoURL}
                    signout={signout}
                  />
                  <PostSender />
                  <Typography variant="h3" style={{ textAlign: "center" }}>
                    Issues
                  </Typography>
                  {post.map((info, index) => (
                    <Post
                      key={info.id}
                      showButton={true}
                      title={info.data.postTitle}
                      body={info.data.postBody}
                      timestamp={info.data.timestamp}
                      name={userInfo.displayName}
                      photoURL={userInfo.photoURL}
                      index={index}
                      id={info.id}
                    />
                  ))}
                </>
              ) : (
                <Login signin={signin} />
              )}
            </Route>

            <PrivateRoute exact path="/post/:title">
              <Header
                name={userInfo.displayName}
                photoURL={userInfo.photoURL}
                signout={signout}
              />

              <PostDetail
                name={userInfo.displayName}
                photoURL={userInfo.photoURL}
              />
            </PrivateRoute>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
