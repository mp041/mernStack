import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import '../App.css'


const Signup = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

    let name,value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const DataPost = async (e) => {
        e.preventDefault();

        const {name,email,phone,work,password,cpassword} = user;

        const res = await fetch("/register", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data ){
            window.alert("Invalid Registration")
            console.log("INvalid");
        }else{
            window.alert("Register Success");
            console.log("registered");
        
            history.push("/login")
        }
    }

    return (
        <div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-container">
                        <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                            
                        <form className="register-form" id="register-form" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i> &nbsp;
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInput}  placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name"></i> &nbsp;
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInput} placeholder="Your email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i> &nbsp;
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInput} placeholder="Your phone" />
                            </div>


                            <div className="form-group">
                                <label htmlFor="work">
                                    <i className="zmdi zmdi-slideshow material-icons-name"></i> &nbsp;
                                </label>
                                <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInput} placeholder="Your profession" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i> &nbsp;
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInput} placeholder="Your password" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock material-icons-name"></i> &nbsp;
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInput} placeholder="confirm password" />
                            </div>

                            <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit btn btn-primary" onClick={DataPost} value="submit" />

                            </div>
                            <NavLink to="/login" className="signup-image-link" > I am already register </NavLink>


                        </form>
                
                        </div>
                        
                            

                       
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Signup;
