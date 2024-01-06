import React, { useState } from "react";
import Input from "../components/Input";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free.
          </p>

          <Input label={"Name"} value={name} type="text" setValue={setName}/>
          <Input label={"Email"} value={email} type="text" setValue={setEmail}/>
          <Input label={"Password"} value={password} type="password" setValue={setPassword}/>
        </div>
      </div>
    </div>
  );
};

export default Register;
