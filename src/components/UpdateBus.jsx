//this component is accessible only by admin to update bus details into backend
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBus, updateBus } from "./services/Busbooking";
import Swal from "sweetalert2";

const UpdateBus = () => {
  const navigate = useNavigate();
  const [busName, setbusName] = useState("");
  const [departureDate, setDoj] = useState("");
  const [pickupLocation, setFrom] = useState("");
  const [dropLocation, setTo] = useState("");
  const [price, setPrice] = useState();
  const [seats, setSeats] = useState();
  const [available_seats, setAvailableSeats] = useState();
  const { id } = useParams();
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBus(id);
        const bus = response.data;
        console.log(bus);
        setbusName(bus.busName);
        setAvailableSeats(bus.available_seats);
        setDoj(bus.departureDate);
        setFrom(bus.pickupLocation);
        setTo(bus.dropLocation);
        setPrice(bus.price);
        setSeats(bus.seats);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  //method to make put API call to update bus details and to validate form fields
  const upBus = async (e) => {
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
      console.log(id);
      await updateBus(id, bus); //API call to make put API call to spring boot
      navigate("/admin");
    }
  };
  return (
    <div className="container">
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
                  error={!!error}
                  name="busName"
                  value={busName}
                  onChange={(e) => setbusName(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">Bus Name field cannot be null</p>
                )}
                <label className="form-label">Date of Journey</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter the Journey Date"
                  name="doj"
                  value={departureDate}
                  onChange={(e) => setDoj(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    Journey Date field cannot be null and it should be of format
                    yyyy-MM-dd
                  </p>
                )}
                <label className="form-label">From</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter From location"
                  name="from"
                  value={pickupLocation}
                  onChange={(e) => setFrom(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    From location field cannot be null
                  </p>
                )}
                <label className="form-label">To</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter To location"
                  name="to"
                  value={dropLocation}
                  onChange={(e) => setTo(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    To location field cannot be null
                  </p>
                )}

                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter the price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger"> Price field cannot be null</p>
                )}
                <label className="form-label">Total Seats</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter the total seats"
                  name="seats"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    Total Seats field cannot be null
                  </p>
                )}
                <label className="form-label">Available Seats</label>
                <input
                  type="text"
                  className="form-control"
                  error={!!error}
                  placeholder="Enter the Available seats"
                  name="seats"
                  value={available_seats}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    Available seats field cannot be null
                  </p>
                )}
                <div className="text-center">
                  <button
                    className="btn btn-outline-warning"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => upBus(e)}
                  >
                    Update
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

export default UpdateBus;
