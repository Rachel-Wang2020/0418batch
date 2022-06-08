import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from 'react-router-dom'
// import Homepage from './Homepage'

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const history = useHistory()

  function validateForm() {
    return email.length > 0 && password.length > 0;

  }

  // User Login info
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`{'email':'${email}','password':${password}}`);
    const user = {'email': email, 'password': password};
    axios.post("http://localhost:8080/Login",user)
        // .then(res=>{alert(res.data.message)});
        .then(res=>{
          console.log(res)
          alert(res.data.message)
          if (res.data != "not register")
            history.push("/homepage")
        });

        


  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="email">
        <div className="label">
          <Form.Label>Email</Form.Label>
        </div>
        <div className="control">
          <FormInput
            type="email"
            // placeholder={LOGIN_FORM_CONTENT.EMAIL.PLACE_HOLDER}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <div className="label">
          <Form.Label>Password </Form.Label>
        </div>
        <div className="control">
          <FormInput
            type="password"
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
      >
        Sign In
      </Button>
      <div className="extra-info">
        <span className="don">Don't have an account?</span>
        <a
          className="sign-up"
          href="#"
          onClick={e => {
            e.preventDefault();
            props.setMode("register");
          }}
        >
          Sign up
        </a>
        <a className="forgot-password" href=""
        onClick={e => {
          e.preventDefault();
          props.setMode("update");
        }}>
          Forget password?
        </a>
      </div>
    </Form>
  );
}

export default LoginForm;
