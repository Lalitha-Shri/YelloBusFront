//Eticket component displays the Eticket for each passenger by taking input as passenger mail id and renders etickets of complete booking details
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getEmail } from "./services/Passenger";
import { useNavigate } from "react-router-dom";

const Eticket = () => {
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState(false);
  const [passengerid, setPassenger] = useState();
  const [passengerName, setPassengerName] = useState("");
  const [aadhar, setAdharId] = useState();
  const [age, setAge] = useState();
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const change1 = (event) => setEmail(event.target.value);
  //navigate to view the ticket
  const handleViewTicket = (id) => {
    navigate(`/view/${id}`);
  };

  const ticketclickhandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
    }
    //console.log("clicked"+" "+email);
    const response = await getEmail(email); //API call to get booking details by email id
    const passengerTicket = response.data;
    setPassenger(response.data.id);
    setPassengerName(response.data.passengerName);
    setAdharId(response.data.aadharId);
    setAge(response.data.age);
    setStatus(response.data.journeyStat);
    // console.log(passenger);
    console.log(response.data.id);
    console.log(passengerTicket);
    setTicket(true);
  };
  return (
    <div className="cont2">
      <div className="card w-50 mx-auto mt-5 mb-5">
        <div className="card-header text-center">E-ticket</div>
        <div className="card-body">
          <Form id="myForm">
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label ">
                Enter your Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                error={!!error}
                name="email"
                value={email}
                onChange={change1}
                required
              />
              {!!error && <p className="text-danger">Email is required</p>}
            </div>
            <div class="text-center">
              <button
                type="button"
                className="btn btn-outline-warning text-center"
                onClick={(e) => ticketclickhandler(e)}
              >
                Search
              </button>
            </div>
          </Form>
        </div>
      </div>
      {ticket && (
        <div className="container">
          <div className="py-4">
            <table className="table border shadow t2">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Passenger Name</th>
                  <th scope="col">Aadhar Id</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{passengerid}</td>
                  <td>{passengerName}</td>
                  <td>{aadhar}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-outline-warning"
                      onClick={(e) => handleViewTicket(passengerid)}
                    >
                      View Ticket
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eticket;
