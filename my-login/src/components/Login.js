import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popup from "./Popup";
import "./Login.css";
// import mag from "../../src/img/mag.jpeg"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function PasswordRevealer({ value }) {
  //   const [shown, setShown] = React.useState(false);
  
  //   return (
  //     <div>
  //       <input type={shown ? 'text' : 'password'} value={value} onChange={() => {}} />
  //       <button onClick={() => setShown(!shown)}>Show/Hide</button>
  //     </div>
  //   );
  // }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    var { email, password } = document.forms[0];
    console.log(`email:${email.value},password:${password.value}`);
  }

  return (
    <>
      {/* -----Navigation Bar------ */}
      <ul className="bar">
        <li><a className="Management">Management</a></li>
        <li><a className="Chuwa">Chuwa</a></li>
        <li className="searchbar">
          <input type="text" className="input-box" placeholder="Search" />
          <img src='../../public/src/img/mag.jpeg' />
        </li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
        </li>
        <li>
          <button id="sign-in" type="button" value="Sign in" onClick={togglePopup}>Sign In</button>
        </li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        </li>
        <li>$0.00</li>

      </ul>
      {/* -----Navigation Bar------ */}
      {/* -----Login in Box------ */}
      <div className="loginBox">
        {isOpen && (
          <Popup
            content={
              <div className="Login">
                <h1 className="h1">Sign in to your account</h1>
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group size="lg" controlId="email">
                    <div className="label">
                      <Form.Label>Email</Form.Label>
                    </div>
                    <div className="control">
                      <Form.Control
                        autoFocus
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group size="lg" controlId="password">
                    <div className="label">
                      <Form.Label>Password</Form.Label>
                    </div>
                    <div className="control">
                      <Form.Control
                        type="password"
                        placeholder="****************************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                  <Button
                    block="true"
                    size="lg"
                    type="submit"
                    className="signin-button"
                    disabled={!validateForm()}
                  >Sign In
                  </Button>
                </Form>
                
                  <div className='extra-info'>
                  <span className='don'>Don't have an account?</span>
                  <a className='sign-up' href=''>Sign up</a>
                  <a className='forgot-password' href=''>Forget password?</a>
                  </div>
                </div>
              
            }
            handleClose={togglePopup}
          />
        )}
        
      </div>
      
      {/* -----Login in Box------ */}

      <footer>
        <ul className='footbar'>
          <li><a className="all-rights-reserved">@2022 All Rights Reserved</a></li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
          </li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
          </li>
          

          <li><a className="contact-us" href="#contact-us">Contact us</a></li>
          <li><a className="privacy-polices" href="#privacy-polices">Privacy Polices</a></li>
          <li><a className="help" href="#help">Help</a></li>
        </ul>
      </footer>
    </>
    
  );
}
