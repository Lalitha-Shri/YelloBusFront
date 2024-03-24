//its accessible only to admin to do CRUD ooperation for bus entity class
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBus, getAllBus } from "./services/Busbooking";

const ListBus = () => {
  const [buses, setBus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listBus();
  }, []);

  const listBus = async () => {
    const response = await getAllBus();
    console.log(response.data);
    setBus(response.data);
    console.log(buses);
  };
  const handleUpdate = (id) => {
    navigate(`/update-bus/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteBus(id);
      window.location.reload(false);
      navigate("/listBus");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">List of Buses</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center">Bus Id</th>
              <th className="text-center">Bus Name</th>
              <th className="text-center">Pickup Location</th>
              <th className="text-center">Drop Location</th>
              <th className="text-center">Total Seats</th>
              <th className="text-center">Available Seats</th>
              <th className="text-center">DepartureDate</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td className="text-center">{bus.id}</td>
                <td className="text-center">{bus.busName}</td>
                <td className="text-center">{bus.pickupLocation}</td>
                <td className="text-center">{bus.dropLocation}</td>
                <td className="text-center">{bus.seats}</td>
                <td className="text-center">{bus.available_seats}</td>
                <td className="text-center">{bus.departureDate}</td>
                <td className="text-center">{bus.price}</td>

                <td>
                  <button
                    className="btn btn-outline-warning"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleUpdate(bus.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-warning"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleDelete(bus.id)}
                  >
                    Delete
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

export default ListBus;
