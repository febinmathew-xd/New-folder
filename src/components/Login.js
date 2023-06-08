import React from "react";
import { Link } from "react-router-dom";
function Login()
{
    return(
      <>
     <div className="content">
        
        <div className="row" style={{position:'absolute',top:'100px',left:'500px'}}>
        <div className="col-nd-3">
            <h1>LOGIN</h1><br/>
        <div className="form-floating mb-3">
                                <input type="Email" className="form-control" id="floatingInput"
                                    placeholder="Email ID" style={{width:'250%'}}/>
                                {/*<label for="floatingInput">Email address</label>*/}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword"
                                    placeholder="Password" style={{width:'250%'}}/>
                                {/*<label for="floatingPassword">Password</label>*/}
                            </div>
                            
                            <Link to="/reg" className="btn btn-primary" style={{backgroundColor:"#16aeeb",width:'100px'}}>Register</Link>
                            
                            <button type="submit" className="btn btn-primary" style={{position:'absolute',top:'233px',left:'120px',width:'100px'}}>Sign in</button>

                            </div>
                            </div>
                            </div>
       <img src="/images/login.jpg"  align="left" alt="" width="450" height="800"/>                   
                         
                  
                            </>
                            )
};
export default Login;