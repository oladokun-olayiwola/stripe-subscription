import React, { useContext, useState } from "react";
import Button from "../components/Button";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

const Login = () => {
  const user = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:4000/api/login", {
        email,
        password,
      }, {
        withCredentials: true,
      });      
      if (data.error === true) {
        toast.error(data.message);
      } else {
        setEmail("");
        setPassword("");
        localStorage.setItem("Token", JSON.stringify(data.token))
        navigate("/");
      }
    } catch (err: unknown) {
    if(err instanceof AxiosError && err.response) { 
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Login</h1>
          <p className="lead pb-4">
            Access your subscriptions. Anytime. Anywhere.
          </p>
          <div className="form-group">
            <Input
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="danger"
                text="Login"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
