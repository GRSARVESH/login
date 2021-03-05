    import React from 'react'
    import './Login.css';


    const Login = (props) => {
        const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,emailError,
            setHasAccount,passwordError}=props;
        return (
            <section className="login">
                <div className="loginContainer">
                    {!hasAccount?(<center>SIGNUP</center>):(<center>SIGNIN</center>)}
                    <label>Username</label>
                    <input type="text"  
                    autoFocus 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input type="password"  
                    autoFocus 
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Signin</button>
                        <p>Dont Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Signup</button>
                        <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                    </div>
                </div>
            </section>
        )
    }

    export default Login
