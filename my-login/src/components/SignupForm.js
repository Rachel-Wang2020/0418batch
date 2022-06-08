import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import Button from "react-bootstrap/Button";
import axios from "axios";


function SignupForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, isRegister] = useState(false);
  const [error, isError] = useState(false);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`{'email':'${email}','password':${password}}`);
    const user = {'email': email, 'password': password};
    if (email && password) {
      axios
        .post("http://localhost:8080/Register", user)
        .then((res) => { console.log(res)
          if (res.status == 200)
            props.setMode("login");
          }
        );
        

    } else {
      alert("invalid input");
    }

    };
    
    
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
        Create account
      </Button>
      <div className="extra-info">
        <span className="don">Already have an account?</span>
        <a
          className="sign-in"
          href="##"
          onClick={e => {
            e.preventDefault();
            props.setMode("login");
          }}
        >
          sign in
        </a>
      </div>
    </Form>
  );
}

export default SignupForm;
