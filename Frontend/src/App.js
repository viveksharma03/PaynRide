
import AdminLogin from "./Components/Adminstrator/Administrator/AdminLogin"
import Dashboard from "./Components/Adminstrator/Administrator/Dashboard";
import Home from "./Components/UserInterface/Home";
import VehicleDetails from "./Components/UserInterface/VehicleDetails";
import Subscription from "./Components/UserInterface/Subscription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookInterface from "./Components/UserInterface/BookInterface";
import PaymentGateway from "./Components/UserInterface/PaymentGateway";
import AdvancePayment from './Components/UserInterface/MyComponents/AdvancePayment'
function App() {
  return (
    <div>
      <Router>
        <Routes >


          <Route element={<AdminLogin />} path="/adminlogin" />
          <Route element={<Dashboard />} path="/dashboard/*" />
          <Route element={<Home />} path="/home" />
          <Route element={<VehicleDetails />} path="/vehicledetails" />
          <Route element={<Subscription />} path="/subscription" />
          <Route element={<BookInterface />} path="/bookinterface" />
          <Route element={<PaymentGateway />} path="/paymentgateway" />
          <Route element={<AdvancePayment />} path="/advancepayment" />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
