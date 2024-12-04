import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "./Components/Landing";
import { AdminLogin } from "./Components/AdminLogin";
import { UserLogin } from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import { AdminHomePage } from "./Components/AdminHomePage";
import { Error } from "./Components/Error";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (  
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}
 
export default App;