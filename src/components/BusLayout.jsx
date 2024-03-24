//Bus layout  shows the seating arrangement of selected bus
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BusLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    //setId(id);
    // console.log(ids)
    let seats = document.querySelector(".all-seats");
    for (var i = 0; i < 19; i++) {
      let randint = Math.floor(Math.random() * 2);
      let booked = randint === 3 ? "booked" : "";
      seats.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="tickets" id="s' +
          (i + 2) +
          '" /><label for="s' +
          (i + 2) +
          '" class="seat ' +
          booked +
          '"></label>'
      );
    }
  }, []);
  const handleSeat = (e) => {
    navigate(`/bookNow/${id}`);
  };
  return (
    <body>
      <div className="center">
        <div className="tickets">
          <div className="ticket-selector">
            <div className="head">
              <div className="title">select your seats</div>
            </div>
            <div className="seats">
              <div className="status">
                <div className="item">Available</div>
                <div className="item">Booked</div>
                <div className="item">Selected</div>
              </div>
              <div className="all-seats">
                <input type="checkbox" name="tickets" id="s1" />
                <label htmlFor="s1" className="seat"></label>
              </div>
            </div>
            <div className="timings">
              <div className="dates"></div>
              <div class="times"></div>
            </div>
          </div>
          <div className="price">
            <div className="total">
              <span>
                {" "}
                <span className="count"></span>{" "}
              </span>
              <div className="amount"></div>
            </div>
            <button type="button" onClick={(e) => handleSeat(e)}>
              Book
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default BusLayout;
