import React from 'react';
import { Link } from 'react-router-dom';
function Registration() {
    return (
        <>
        <div className="content">
        
        <div className="row" style={{position:'absolute',top:'100px',left:'500px'}}>
        <div className="col-nd-3">
            <h1>Register</h1><br/>
                        
                        
                            <div className="form-floating mb-3">
                                <input type="Name" className="form-control" id="floatingInput"
                                    placeholder="Name" style={{width:'250%'}}/>
                               {/* <label for="floatingInput">Name</label>*/}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Address" className="form-control" id="floatingInput"
                                    placeholder="Address" style={{width:'250%'}}/>
                               {/*} <label for="floatingInput">Address</label>*/}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="Contact Number" className="form-control" id="floatingInput"
                                    placeholder="Contact Number" style={{width:'250%'}}/>
                                {/*<label for="floatingInput">Contact Number</label>*/}
                            </div>
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
                            <div>
                            <label for="floatingInput">I have Already an Account</label></div>
                            <Link to="/Login" className="btn btn-primary" style={{backgroundColor:"#16aeeb",width:'100px'}}>LOGIN</Link>
                            
                            <button type="submit" className="btn btn-primary" style={{position:'absolute',top:'473px',left:'120px',width:'90px'}}>Sign in</button>

                            </div>
                
                </div>
                

</div>
<img src="/images/register.jpg"  align="left" alt="" width="450" height="800"/> 
</>   
    );
}

export default Registration;