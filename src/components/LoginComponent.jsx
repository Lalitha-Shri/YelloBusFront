//it uses spring security from backend to validate the login user and generate JWT token
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "./services/AuthService";

const LoginComponenet = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPICall(username, password); //API CALL TO LOGIN
      const token = "Bearer " + response.data.accessToken; // add token to header for all other API call
      const role = response.data.role;
      storeToken(token);
      saveLoggedInUser(username, role);
      console.log(role);
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="background">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Login form</h2>
              </div>
              <div className="card-body ">
                <form>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">UserName</label>

                    <div className="col-md-9">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter your Name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Password</label>

                    <div className="col-md-9">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3 text-center">
                    <button
                      className="btn btn-outline-warning"
                      onClick={(e) => handleLoginForm(e)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponenet;
