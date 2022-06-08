import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import Button from "react-bootstrap/Button";

function UpdatepswForm(props) {
  const [email, setEmail] = useState("");
  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`{'email':'${email}'}`);
  }
  return (
    <Form onSubmit={handleSubmit}>
        <a>Enter your email link, we will send you the recovery link</a>
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
      
      <Button
        block="true"
        size="lg"
        type="submit"
        className="signin-button"
        disabled={!validateForm()}
      >
        Update password
      </Button>
    </Form>
  );
}

export default UpdatepswForm;
