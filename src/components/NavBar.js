// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import HomeContainer from "../containers/HomeContainer";

// const NavBar = ({cars}) => {

//     return (
//         <>        
//         <Router>
//             <div className="nav">
//                 <ul>
//                     <li><Link to='/'>Home</Link></li>  
//                     <li><Link to='/customerContainer'>Customer Sign up/Log in</Link></li>
//                     <li><Link to='/dealerContainer'>Dealer Sign up/Log in</Link></li>
//                     <li><Link to='/contact'>Contact Us</Link></li>
//                     <li><Link to='/about'>About</Link></li>
//                 </ul>

//                 <Routes>
//                     <Route path="/" element={<HomeContainer cars={cars}/>} />
//                     <Route path="/customerContainer" element={<CustomerContainer />} />

//                 </Routes>

//             </div>

//         </Router>


//         <h1>Hello from NavBar!</h1>
//         </>
//     );

// }

// export default NavBar;