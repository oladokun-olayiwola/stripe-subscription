import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = () => {
    console.log(name, email, password);
     
  }

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free.
          </p>

          <Input label={"Name"} value={name} setValue={setName}/>
          <Input label={"Email"} type="email" value={email} setValue={setEmail}/>
          <Input label={"Password"} value={password} type="password" setValue={setPassword}/>
          <div className="d-grid">
          <Button type="danger" text="Register" size="sm" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
