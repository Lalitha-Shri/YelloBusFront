// AddBus components is accessible only to admin where new bus details and routes can be added
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBus } from "./services/Busbooking";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBus = () => {
  const navigate = useNavigate();
  const [busName, setbusName] = useState("");
  const [departureDate, setDoj] = useState("");
  const [pickupLocation, setFrom] = useState("");
  const [dropLocation, setTo] = useState("");
  const [price, setPrice] = useState();
  const [seats, setSeats] = useState();
  const [available_seats, setAvailableSeats] = useState();
  const [error, setError] = useState(false);
  //savebus makes makes API call to bus controller of spring boot for post API call where bus details are added
  const saveBus = async (e) => {
    e.preventDefault();
    const bus = {
      busName,
      departureDate,
      pickupLocation,
      dropLocation,
      price,
      seats,
      available_seats,
    };
    //validation for  AddBus form
    if (busName === "") {
      setError(true);
      console.log(error);
    } else if (!departureDate) {
      setError(true);
      console.log(error);
    } else if (pickupLocation === "") {
      setError(true);
      console.log(error);
    } else if (dropLocation === "") {
      setError(true);
      console.log(error);
    } else if (price == 0) {
      setError(true);
      console.log(error);
    } else if (seats == 0) {
      setError(true);
      console.log(error);
    } else if (available_seats == 0) {
      setError(true);
      console.log(error);
    } else {
      console.log(bus);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bus has been Saved",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(bus);
      const response = await addBus(bus); //API call
      console.log(response);
      navigate("/admin");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Bus Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the BusName"
                  name="busName1"
                  error={!!error}
                  value={busName}
                  onChange={(e) => setbusName(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Bus Name field cannot be null</p>
                )}

                <label className="form-label">Date of Journey</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Journey Date(yyyy-MM-dd)"
                  name="doj"
                  value={departureDate}
                  error={!!error}
                  onChange={(e) => setDoj(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Date of journey field cannot be null
                  </p>
                )}
                <label className="form-label">From</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter From location"
                  name="from"
                  value={pickupLocation}
                  error={!!error}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    From location field cannot be null
                  </p>
                )}
                <label className="form-label">To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter To location"
                  name="to"
                  error={!!error}
                  value={dropLocation}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    To location field cannot be null
                  </p>
                )}
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the price"
                  name="price"
                  value={price}
                  error={!!error}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Price field cannot be null</p>
                )}
                <label className="form-label">Total Seats</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the total seats"
                  name="seats"
                  error={!!error}
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Total Seats field cannot be null
                  </p>
                )}
                <label className="form-label">Available Seats</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Available seats"
                  name="seats"
                  error={!!error}
                  value={available_seats}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Available Seats field cannot be null
                  </p>
                )}
                <div className="text-center">
                  <button
                    className="btn btn-outline-warning "
                    style={{ marginTop: "10px" }}
                    onClick={(e) => saveBus(e)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBus;
