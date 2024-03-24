//Admin component is accessible only to admin where add bus,update bus,view bus details,view passenger list can be done only by admin
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './services/AuthService';
import Swal from 'sweetalert2'

const AdminComponent = () => {
  const navigate=useNavigate();
  //handle logout will take us to home page after clearing local storage and session storage
  const handleLogOut=()=>{
    logout();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "Thank you admin!!",
          icon: "success"
        });
        
        navigate("/");
        
      }
    });
    
    

    }
  return (
    <div className="container mt-4" style={{padding:"6rem"}}>
    <h2 className="text-center mb-4">Welcome to the Admin Dashboard!</h2>
    <div className="row">
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Bus List</Card.Title>
            <Card.Text>View the list of buses.</Card.Text>
            <Link to="/listBus">
              <Button variant="warning">Go to Bus List</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Passenger List</Card.Title>
            <Card.Text>View the list of passengers.</Card.Text>
            <Link to="/listPassenger">
              <Button variant="warning">Go to User List</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Add Bus</Card.Title>
            <Card.Text>Add a new bus to the system.</Card.Text>
            <Link to="/addbuses">
              <Button variant="warning">Add Bus</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Log-out</Card.Title>
            <Card.Text>Click here to logout.</Card.Text>
            <Button variant="warning" onClick={handleLogOut}>
              Logout
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>

   
  );
};

export default AdminComponent