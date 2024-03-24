// user can use this component to update their password
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "./services/AuthService";
import { useState } from "react";
import { modifyPassword } from "./services/ChangePass";
import Swal from "sweetalert2";

const PasswordChange = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const loggesUser = getLoggedInUser();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setUsername(loggesUser);
    console.log(username);
  });

  const resetPassword = async (e) => {
    e.preventDefault();
    const user = {
      username,
      oldPassword,
      newPassword,
    };
    if (oldPassword === "") {
      setError(true);
    } else if (newPassword === "") {
      setError(true);
    } else {
      await modifyPassword(user);         //API call to update user password into user table
      Swal.fire("Password Updated Successfully!!!");
      navigate("/user");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Update Password</h2>
            </div>
            <div className="card-body ">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Username</label>
                  <div className="col-md-9 ">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter Username"
                      value={username}
                      error={!!error}
                      required
                    ></input>
                    {!!error && (
                      <p className="text-danger">
                        User name field cannot be null
                      </p>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    Enter Old Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      error={!!error}
                      placeholder="Enter old Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    ></input>
                    {!!error && (
                      <p className="text-danger">Passord cannot be null</p>
                    )}
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    Enter New-Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      error={!!error}
                      className="form-control"
                      placeholder="Enter new Confirm Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    ></input>
                    {!!error && (
                      <p className="text-danger">Password cannot be null</p>
                    )}
                  </div>
                </div>

                <div className="form-group mb-3 col-md-9 text-center">
                  <button
                    className="btn btn-outline-warning"
                    onClick={(e) => resetPassword(e)}
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PasswordChange;
