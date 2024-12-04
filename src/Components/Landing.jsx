import { Link } from "react-router-dom";
import '../styles/Landing.css'
const Landing = () => {
    return (
       <div className="page">
        <Link to='/adminlogin'>
                <img src="data:image/jpeg;base64,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" alt="" />
        <h1>Admin</h1>
        </Link>
        <Link to='/userlogin'>
                <img src="data:image/png;base64,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" alt="" />

        <h1>User</h1>
        </Link>
       </div>
      );
}
 
export default Landing;