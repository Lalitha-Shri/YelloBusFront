//its accessible only to admin where list of passenger and their booking status is displayed
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPassenger } from "./services/Passenger";

const PassengerList = () => {
  const [passengers, setPassenger] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listPassenger();
  }, []);

  const listPassenger = async () => {
    const response = await getAllPassenger();
    console.log(response.data);
    setPassenger(response.data);
    console.log(passengers);
  };
  return (
    <div className="container">
      <h2 className="text-center">List of Passengers</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center">Passenger Name</th>
              <th className="text-center">Aadhar Id</th>
              <th className="text-center">Contact No</th>
              <th className="text-center">Email</th>
              <th className="text-center">Age</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td className="text-center">{passenger.passengerName}</td>
                <td className="text-center">{passenger.aadharId}</td>
                <td className="text-center">{passenger.contactNo}</td>
                <td className="text-center">{passenger.email}</td>
                <td className="text-center">{passenger.age}</td>
                <td className="text-center">
                  {passenger.cancelStat
                    ? "Booking Cancelled"
                    : "Booking Confirmed"}
                </td>
                {/* <td>
              <button className='btn btn-outline-warning'style={{marginLeft:"25px"}} >Update</button>
              <button className='btn btn-warning'style={{marginLeft:"25px"}} >View</button>
            </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerList;
