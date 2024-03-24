//Display history of booking done by the user
import React from "react";
import { useState } from "react";
import { getAllBooking } from "./services/Passenger";
import { useNavigate } from "react-router-dom";
import { cancelTicket } from "./services/Passenger";
import { useEffect } from "react";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [cancelStat, setCancelStat] = useState(false);
  const [passengerid, setPassengerid] = useState();
  const [booking, setBooking] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    listBooking();
  }, []);

  const listBooking = async () => {
    try {
      const response = await getAllBooking(); //API call to get all the booking details from bus boooking dto
      console.log(response.data);
      setBooking(response.data);
      console.log(booking);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      Swal.fire("Booking Canceled");
      console.log(id);
      const response = await cancelTicket(id); //API call to update cancel status to true
      console.log(response.data);
      console.log(response.data.id);
      setCancelStat(response.data.cancelStat);
      listBooking();
      setPassengerid(response.data.id);
      console.log(response.data.cancelStat);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    // Update the state to disable the button
    setIsButtonDisabled(true);
    // Additional logic or actions can be performed here
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Booking</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center">Booking ID</th>
              <th className="text-center">Bus Name</th>
              <th className="text-center">Passenger Name</th>
              <th className="text-center">Departure Date</th>
              <th className="text-center">Contact No</th>
              <th className="text-center">Email</th>
              <th className="text-center">Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book) => (
              <tr key={book.id}>
                <td className="text-center">{book.bookingId}</td>
                <td className="text-center">{book.busName}</td>
                <td className="text-center">{book.passenger.passengerName}</td>
                <td className="text-center">{book.departureDate}</td>
                <td className="text-center">{book.passenger.contactNo}</td>
                <td className="text-center">{book.passenger.email}</td>
                <td className="text-center">
                  {book.passenger.cancelStat
                    ? "Journey Status:Canceled"
                    : "Journey Status:Confirmed"}
                </td>
                <td>
                  <button
                    className="btn btn-outline-warning"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleUpdate(book.passenger.id)}
                    disabled={isButtonDisabled}
                  >
                    Cancel Ticket
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
