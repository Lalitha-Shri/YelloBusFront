//this is accessible to all user to find buses for the selected routes
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { getAllBus } from "./services/Busbooking";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import BookingNow from "./BookingNow";

const UserComponent = () => {
  const [busFrom, setFrom] = useState(null);
  const [busTo, setTo] = useState(null);
  const [findbus, setfindBus] = useState(false);
  const [fetch_buses, setfetchBus] = useState([]);
  const index = 0;
  const navigate = useNavigate();

  const optionsFrom = [
    { value: "salem", label: "salem" },
    { value: "theni", label: "theni" },
    { value: "chennai", label: "chennai" },
    { value: "trichy", label: "trichy" },
    { value: "dindigul", label: "dindigul" },
    { value: "kanyakumari", label: "kanyakumari" },
    { value: "madurai", label: "madurai" },
    { value: "pudukottai", label: "pudukottai" },
    { value: "thanjavur", label: "thanjavur" },
    { value: "nagapattinam", label: "nagapattinam" },
    { value: "ooty", label: "ooty" },
    { value: "coimbatore", label: "coimbatore" },
    { value: "rameshwaram", label: "rameshwaram" },
  ];
  const optionsTo = [
    { value: "salem", label: "salem" },
    { value: "chennai", label: "chennai" },
    { value: "trichy", label: "trichy" },
    { value: "dindigul", label: "dindigul" },
    { value: "kanyakumari", label: "kanyakumari" },
    { value: "madurai", label: "madurai" },
    { value: "pudukottai", label: "pudukottai" },
    { value: "thanjavur", label: "thanjavur" },
    { value: "nagapattinam", label: "nagapattinam" },
    { value: "ooty", label: "ooty" },
    { value: "coimbatore", label: "coimbatore" },
    { value: "mettur", label: "mettur" },
    { value: "rameshwaram", label: "rameshwaram" },
  ];
  const onCountChange = () => {
    console.log(busID); // returns 0;
  };
  //navigate to seating preferences page after finding the bus
  const handleBooking = (e, bus1id) => {
    e.preventDefault();
    const bus = bus1id;
    navigate(`/seatLayout/${bus1id}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(busFrom.label+" "+busTo.label);

    //   const response=await getAllBus();
    //   const data=response.data;
    //   const filteredBus=data.filter((bus)=>busFrom.label===bus.pickupLocation && busTo.label===bus.dropLocation);
    //  console.log(filteredBus);
    //   setfetchBus(filteredBus);
    //   setfindBus(true);
    //   //console.log(fetch_buses);
    await axios //API call to find filtered bus list by 'from' and 'to' location field
      .get("http://localhost:8080/api/bus")
      .then((response) => {
        const buses = response.data;
        const filteredBuses = buses.filter(
          (bus) =>
            bus.pickupLocation.toLowerCase() === busFrom.label &&
            bus.dropLocation.toLowerCase() === busTo.label
        );
        setfetchBus(filteredBuses);
        //console.log(filteredBuses);
        setfindBus(true);
      })
      .catch((error) => {
        console.error("Error fetching buses:", error);
      });
  };
  // const handleChange=val=>{
  //   setFrom(val[0]);
  //   console.log(busFrom)
  // }
  // const handleChange1=val1=>{
  //   setTo(val1[0]);
  //   console.log(busTo)
  // }

  return (
    <div className="contfromto">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 heading">Plan your Journey!</h2>
          <Form>
            <div className="mb-3">
              <label htmlFor="location_from" className="form-label ll">
                From:
              </label>
              <Select
                value={busFrom}
                onChange={setFrom}
                options={optionsFrom}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location_to" className="form-label ll">
                To:
              </label>
              <Select value={busTo} onChange={setTo} options={optionsTo} />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-outline-warning"
                onClick={(e) => handleSubmit(e)}
              >
                Find Buses
              </button>
            </div>
          </Form>
        </div>
      </div>
      {findbus && (
        <div className="container">
          <div className="py-4">
            <table className="table border shadow t2">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Bus Name</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Dep Date</th>
                  <th scope="col">Total seats</th>
                  <th scope="col">Available Seats</th>
                  <th scope="col">Price of Ticket</th>
                  <th scope="col">Book Tickets</th>
                </tr>
              </thead>
              <tbody>
                {fetch_buses.map((bus1, index) => (
                  <tr key={bus1.id}>
                    <td>{bus1.id}</td>
                    <td>{bus1.busName}</td>
                    <td>{bus1.pickupLocation}</td>
                    <td>{bus1.dropLocation}</td>
                    <td>{bus1.departureDate}</td>
                    <td>{bus1.seats}</td>
                    <td>{bus1.available_seats}</td>
                    <td>{bus1.price}</td>

                    {bus1.available_seats > 0 ? (
                      <td>
                        <button
                          type="submit"
                          className="btn btn-outline-warning"
                          onClick={(e) => handleBooking(e, bus1.id)}
                        >
                          Book Now!!
                        </button>
                      </td>
                    ) : (
                      <td>
                        <h6>No seats available</h6>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
