import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'

function Login(props) {
    // const [isSignedIn,setIsSignedIn] = useContext(UserContext)style={{margin:"0px auto",display:'flex',flexDirection:"column",width:'50%'}}style={{height: '200px',marginBottom: '200px'}}style={{width:'60%',margin:"0px auto"}} 

    
    return (
        <div className="login" >
       <img  className="login__img " src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Issue_logo.png" alt=""/>
            
             <Button className="login__button" color="primary" variant="contained" fontSize="large" onClick={ props.signin}>Sign In</Button>
         
        </div>
    )
}

export default Login
