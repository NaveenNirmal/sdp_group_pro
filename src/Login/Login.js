import React, { useEffect,useState } from 'react';
import './Login.css';
import LoginBack from '../images/loginBack.jpg';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const auth = getAuth();

    const history = useHistory();

    const [formData, setFormData] = useState({
        userEmail:'',
        userPassword:''
    });

    const handleInput = (e) => {
        e.persist();
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       await signInWithEmailAndPassword(auth, formData.userEmail,formData.userPassword).then(userCredentials => {
            var user = userCredentials.user;
            history.push('/adminmasterpage/dashboard')
        }).catch(error => {
            alert(error.message)
        })
    }

    useEffect(() => {
        
    },[])

  return (
        <>
            <div className="backAbstract1"></div>
            <div className="container" id="login__Container">
                <div className="row" id="login__Row">
                    <div className="login__Header">
                        <h4 className="login__Heading">Welcome, <span className="login__HeadingSpan"> Pick & Go Sign In</span></h4>
                    </div>
                    <div className="col-md-5 m-5">
                        <div className="login__Box">
                            <img src={LoginBack} alt="loginBack" className="img-fluid" id="loginBack"/>
                        </div>
                    </div>
                    <div className="col-md-5 p-5">
                        <div className="login__FormBox">
                            <form className="user__LoginForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlfor="userEmail">Email</label>
                                    <input type="email" className="form-control" name="userEmail" onChange={handleInput} value={formData.userEmail} id="userEmail" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlfor="userPassword">Password</label>
                                    <input type="password" className="form-control" name="userPassword" onChange={handleInput} value={formData.userPassword} id="userPassword" />
                                </div>
                                <div className="form-check" id="login__FormCheck">
                                    <input type="checkbox" className="form-check-input" name="rememberMe" id="rememberMe" />
                                    <label className="form-check-label" for="rememberMe" id="rememberLabel">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" name="btn__UserLogin" id="btn__UserLogin">SIGN IN</button>
                            </form>
                        </div>
                    </div>
                    <div className="login__Footer">
                        <p className="login__FooterText">&copy; 2022 Pick & Go Sign In. All Rights Reserved | Designed by <span className="login__FooterTextSpan">Kingston Batch 05 Group 2</span></p>
                    </div>
                </div>
            </div>
            <div className="backAbstract2"></div>
        </>
    );
}

export default Login;
