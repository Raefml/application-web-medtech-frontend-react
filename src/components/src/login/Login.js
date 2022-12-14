import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import {  useNavigate, useParams } from "react-router-dom";
import { FaKey} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
 import { FaUserAlt } from "react-icons/fa";
 import "./Login.css";

const Login=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
     
    const [msg,setMsg] = useState('');
 
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
 
    const [user, setUser] = useState({
        email: "",
        password:""
      });
 
      let navigate =  useNavigate(); 
 
      const {email,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
    const signIn = () =>
    {
 
      const users = { username };  // To Store Email in Localstore and send to Home Page 
 
       if(user.email === '')
       {
         alert('Email Field is empty')
       }
       else if(user.password === '')
       {
         alert('Pass Field is empty')
       }
       if ((user.password==='mohamed') && ( user.email ==='raef'))
       {navigate("/Home1");} 
 
       axios.post("http://localhost:8000/api/reactlogin/",user)
       .then(response => {
        setMsg(response.data);

        localStorage.setItem("users",response.data);
       
       
        navigate("/Home");

       
      });
    }
 
    
    return(
        <Grid>
             <div class=" Register">
            
             
            <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign in</h2>
                                
                               

                                <div class="form-group">
                                    <label for="email"><i><FaMailBulk /> </i></label>
                                    <input  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i><FaKey /> </i></label>
                                    <input label='Password'  type="password" name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password'  fullWidth required/>
                                </div>
                                <div class="form-group form-button">
                                <Button type='submit' onClick={signIn} class="form-submit" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                                </div>
                                <Typography>Don't Have Account ? 
                   <NavLink to="/re">
                       <span style={{marginLeft:"4px"}}>Singup</span>
                  </NavLink>
                </Typography>
               
                </div>
                    </div>
                </div> <div class="signup-image1">
                            
                            
                           
                            <img src="ee.png" alt="" className="doo" />
                            <a href="#" class="signup-image-link"></a>
                        </div>
           
           
           
</section>
</div>
        </Grid>
    )
}
 
export default Login