//Explore more Trending packages page
import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Packages = () => {
  const style = {
    padding: "1rem",
  };
  return (
    <section className="background">
      <div className=" " style={style}>
        <h2 className="text-center mb-4 text-danger dark">
          Conact Us to know more about our packages
        </h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mb-4 ">
            <div className=" mb-4 ms-5 text-center">
              <Card>
                <Card.Body>
                  <Card.Title className="text-danger">
                    EXOTIC ANDAMAN HOLIDAYS - GOLD
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    The Andaman & Nicobar are a group of picturesque Islands,
                    big and small, inhabited and uninhabited, a total of 572
                    islands, islets and rocks lying in the South Eastern Part of
                    the Bay of Bengal. They lie along an arc in long and narrow
                    broken chain, approximately North-South over a distance
                    nearly 800 kms.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mb-4 ms-5 text-center">
              <Card>
                <Card.Body>
                  <Card.Title className="text-danger">
                    CHENNAI-SHIRDI PACKAGE{" "}
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Shirdi is famous temple of Shri Sai Baba, one of the most
                    visited pilgrim spots in India. The temple attracts millions
                    of devotees of all religions, castes and creed who come to
                    pay homage to Shri Sai Baba. When Baba was physically
                    present at the age of 20 in Shirdi, it was a small village
                    of 80 thatched houses with mud walls. Today it is a big town
                    with palatial modern buildings and shops. Thursday is the
                    day Saibaba is specially worshipped. On this day devotees
                    from all over India visit Shirdi for Darshan of Saibaba.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mb-4 ms-5 text-center">
              <Card>
                <Card.Body>
                  <Card.Title className="text-danger">
                    ESSENCE OF MEGHALAYA{" "}
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Meghalaya is a state in northeast India. Meghalaya was
                    formed on 21 January 1972 by carving out two districts from
                    the state of Assam: the United Khasi Hills and Jaintia Hills
                    and the Garo Hills. The estimated population of Meghalaya in
                    2014 was 3,211,474.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
