import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popup from "./Popup";
import "./Login.css";

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

  function handleSubmit(event) {
    event.preventDefault();
    var { email, password } = document.forms[0];
    console.log(`email:${email.value},password:${password.value}`);
  }

  return (
    <>
      {/* -----Navigation Bar------ */}
      <div className="bar">
        <span className="Management">Management</span>
        <span className="Chuwa">Chuwa</span>

        <div className="searchbar">
          <input type="text" className="input-box" placeholder="Search" />
        </div>

        <input
          id="sign-in"
          type="button"
          value="Sign in"
          onClick={togglePopup}
        />
      </div>
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
                        placeholder="**********"
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
        <ul>
          <li><a className="all-rights-reserved">@2022 All Rights Reserved</a></li>
          <li><a className="contact-us" href="#contact-us">Contact us</a></li>
          <li><a className="privacy-polices" href="#privacy-polices">Privacy Polices</a></li>
          <li><a className="help" href="#help">Help</a></li>
        </ul>
        
        
        
        
      </footer>
    </>
  );
}
