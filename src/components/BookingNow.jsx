//BookingNow component is accessible to all user where user can book bus by entering passenger details
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBus, updateTickets } from "./services/Busbooking";
import { addBooking } from "./services/Passenger";
import Swal from "sweetalert2";

const BookingNow = () => {
  let [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  let date = new Date();
  let today = new Date().toISOString().slice(0, 10);
  const [passengerName, setPassengerName] = useState("");
  const [aadharId, setAadarId] = useState();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [busId, setBusId] = useState();
  const [contactNo, setContactNo] = useState();
  const [journeyStat, setJourneyStat] = useState(true);
  const [cancelStat, setCancelStat] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [bookingDate, setDate] = useState("");
  const [price, setPrice] = useState();
  const [totalamount, setTotal] = useState();
  const [bookid] = useState(Math.random().toString(36).substr(2, 8));
  const [busName, setbusname] = useState("");
  const [fee, setFee] = useState();
  const [departureDate, setDdate] = useState();
  const [error, setError] = useState(false);
  //renders bus details using bus id and set the response in usestate
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const response = await getBus(id); //API call to get bus by Id
        const bus = response.data;
        const p = bus.price;
        setPrice(p);
        setCount(count);
        setBookingId("YEO" + bookid);
        setDate(today);
        setTotal(p);
        const name = bus.busName;
        setbusname(name);
        setBusId(bus.id);
        // setFee(bus.price);
        const datee = bus.departureDate;
        setDdate(datee);
        //console.log(bus);
        // console.log(busName)
        // console.log(fee);
        // console.log(departureDate)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  function onsetTotal() {
    setTotal((count + 1) * price);
  }
  // this handle MakePayment button click which displays the total amount to be paid by user for booking using the count of passenger and ticket price
  const paymentclickhandler = async (e) => {
    e.preventDefault();
    console.log(count);
    // console.log(price);
    onsetTotal();
    await updateTickets(busId, count); //API call to update the tickets by subtracting count of passenger and available seats
    // const total = (count+1) * price;
    // setTotal(total);
    // console.log(total);
    // console.log(totalamount);
    Swal.fire({
      title: `Total amount:${totalamount}`,
      text: "Get your e-tickets by clicking E-ticket button on top!!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Pay now!!",
      denyButtonText: `Pay Later!!`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Payment success!", "", "");
        navigate("/user");
      } else if (result.isDenied) {
        Swal.fire("Pay amount during your Journey", "");
        navigate("/user");
      }
    });
  };
  //this method handles the add passenger button which is used to add passenger detail to backend by making post API call
  const handleAddPassenger = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    count = count + 1;
    setCount(count);
    const passenger = {
      passengerName,
      aadharId,
      contactNo,
      email,
      age,
      journeyStat,
      cancelStat,
    };
    // console.log(passenger);
    // console.log(bookid);
    setBookingId("YEO" + bookid);
    setDate(today);
    const booking = {
      bookingId,
      bookingDate,
      passenger,
      busName,
      fee,
      departureDate,
    };
    if (passengerName === "") {
      setError(true);
    } else if (email === "") {
      setError(true);
    } else if (aadharId === 0) {
      setError(true);
    } else if (contactNo === 0) {
      setError(true);
    } else if (age === 0) {
      setError(true);
    } else {
      const response = await addBooking(booking); //API call
      setPassengerName("");
      setEmail("");
      setAadarId(0);
      setAge(0);
      setContactNo(0);
    }
  };
  const change1 = (event) => setPassengerName(event.target.value);
  const change2 = (event) => setAadarId(event.target.value);
  const change3 = (event) => setEmail(event.target.value);
  const change4 = (event) => setAge(event.target.value);
  const change5 = (event) => setContactNo(event.target.value);

  return (
    <div className="cont2">
      <div className="card w-50 mx-auto mt-3 mb-5">
        <div className="card-header">Add Passenger {count + 1}</div>
        <div className="card-body">
          <Form id="myForm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name of Passenger
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                error={!!error}
                value={passengerName}
                onChange={change1}
                required
              />
              {!!error && (
                <p className="text-danger">
                  Passenger Name field cannot be null
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="aadhar" className="form-label">
                Aadhar Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your 12 digit aadhar number..."
                id="aadhar"
                name="aadhar"
                value={aadharId}
                onChange={change2}
                error={!!error}
                required
              />
            </div>
            {!!error && (
              <p className="text-danger">Aadhar Id field cannot be null</p>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                error={!!error}
                onChange={change3}
                required
              />
              {!!error && (
                <p className="text-danger">Email field cannot be null</p>
              )}
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={age}
                error={!!error}
                onChange={change4}
                required
              />
            </div>
            {!!error && <p className="text-danger">Age field cannot be null</p>}

            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                error={!!error}
                className="form-control"
                id="contact"
                name="contact"
                value={contactNo}
                onChange={change5}
                required
              />
              {!!error && (
                <p className="text-danger">Contact No field cannot be null</p>
              )}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={(e) => handleAddPassenger(e)}
              >
                Add Passenger
              </button>
            </div>
          </Form>
        </div>
        <div className="card-footer text-center">
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={(e) => paymentclickhandler(e)}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingNow;
