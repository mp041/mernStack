import React,{useState,useContext} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import '../App.css'
import { UserContext } from "../App";

const Login = () => {
    const {state, dispatch } = useContext(UserContext);

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const userLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = res.json();
        console.log(data);

        if(res.status === 400 || res.status === 401 || res.status === 422 || !data){
            window.alert("Invalid Credential");
            console.log("Invalid Credential");
        }else{
            dispatch({type:"USER",payload:true})
            window.alert("Successfully Login");
            console.log("Success");

            history.push("/");
        }

    }


    return (
        <div>
            <section className="login">
                <div className="container mt-5">
                    <div className="signup-container">



                        <div className="login-form">
                        <h2 className="form-title">Sign In</h2>
                        <form className="login-form" id="login-form" method="POST">
                        
                    

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name"></i> &nbsp;
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Your email" />
                            </div>

                            

                            

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i> &nbsp;
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" />
                            </div>

                            

                            <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary" onClick={userLogin} value="LogIn" />

                            </div>
                            <NavLink to="/signup" className="login-image-link" > Create an Account </NavLink>


                        </form>
                
                        </div>
                        
                            

                       
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Login;
