import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ReservationForm from "./pages/Booking";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Confirmation from "./pages/Confirmation";


function Routeing(){
    return(
        <Routes>
                <Route exact path='/' element ={<HomePage/>}/>
                <Route path='/about' element = {<About/>}/>
                <Route path='/confirmation' element = {<Confirmation/>}/>
                <Route path='/reservations' element ={<ReservationForm/>}/>
                <Route path='/order' element ={<Order/>}/>
                <Route path='/login' element ={<Login/>}/>
          
          </Routes>

    );
}
export default Routeing;

