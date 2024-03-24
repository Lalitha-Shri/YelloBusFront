import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AdminComponent from "./components/AdminComponent";
import ListBus from "./components/ListBus";
import PassengerList from "./components/PassengerList";
import AddBus from "./components/AddBus";
import UpdateBus from "./components/UpdateBus";
import UserComponent from "./components/UserComponent";
import BookingNow from "./components/BookingNow";
import Eticket from "./components/Eticket";
import ViewTicket from "./components/ViewTicket";
import LoginComponenet from "./components/LoginComponent";
import Register from "./components/Register";
import Packages from "./components/Packages";
import About from "./components/About";
import PasswordChange from "./components/PasswordChange";
import BusLayout from "./components/BusLayout";
import MyBooking from "./components/MyBooking";

function App() {
  //Routes to different endpoints by using router routes route and link
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/admin" element={<AdminComponent />} />
          <Route path="/user" element={<UserComponent />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="/listBus" element={<ListBus />} />
          <Route path="/listPassenger" element={<PassengerList />} />
          <Route path="/addbuses" element={<AddBus />} />
          <Route path="/update-bus/:id" element={<UpdateBus />}></Route>
          <Route path="/bookNow/:id" element={<BookingNow />}></Route>
          <Route path="/logout" element={<HomeComponent />}></Route>
          <Route path="/eticket" element={<Eticket />}></Route>
          <Route path="/view/:id" element={<ViewTicket />}></Route>
          <Route path="/login" element={<LoginComponenet />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
          <Route path="/aboutUs" element={<About />}></Route>
          <Route path="/changePassword" element={<PasswordChange />}></Route>
          <Route path="/seatLayout/:id" element={<BusLayout />}></Route>
          <Route path="/myBooking" element={<MyBooking />}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
