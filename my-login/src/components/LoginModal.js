import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import UpdatepswForm from './UpdatepswForm'

const LoginModal = (props) => {
  const [mode, setMode] = useState("login");
  

  return (
    <>
      <Modal show={props.modalOpen} onHide={props.handleModalClose}>
        <Modal.Header closeButton onClick={(e) => {
          e.preventDefault();
          setMode("login");
        }}>
          <Modal.Title>{ mode === "login" ? "Sign in to your account" : mode === "register" ? "Sign up an account" : "Update your password"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {mode === "login" ? (<LoginForm setMode={setMode}/>) : mode === "register" ? (<SignupForm setMode={setMode}/>) : (<UpdatepswForm setMode={setMode}/>)}
          {/* <LoginForm /> */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="danger" onClick={props.handleModalOpen}>
            Cancel
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
