import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import NavBar2 from "./Components/Navbar2";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Register from "./Components/Register";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <div className="App">
//           <NavBar />
//           <Routes>
//             <Route exact path="/" Component={Home} />
//             <Route exact path="/register" Component={Register} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
//     </>
//   );
// };
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar2 />
          <Register />
          {/* <NavBar />
          <Home /> */}
        </div>
      </Router>
    </>
  );
};

export default App;
