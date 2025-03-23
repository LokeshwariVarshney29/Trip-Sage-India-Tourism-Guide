/* eslint-disable react/jsx-no-undef */
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navigation from "./components/Navigation";
import Planet from "./pages/destinations/Planet";
import { Signup } from "./pages/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TajMahal from "./pages/destinations/Maps/TajMahal";
import HawaMahal from "./pages/destinations/Maps/HawaMahal";
import AmberFort from "./pages/destinations/Maps/AmberFort";
import WTP from "./pages/destinations/Maps/WTP";

function App() {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                    <Route path="Tripsage/signup" element={<Signup />} />
                    </Routes>
                    <Navigation />
                    <Routes>
                   
                        <Route path="/Tripsage" element={<Home />} />
                        <Route path="/Tripsage/destination" element={<Destination />}>
                            <Route path=":postSlug" element={<Planet />} />
                        </Route>
                        <Route path="/Tripsage/crew" element={<Crew />} />
                        <Route path="/Tripsage/tech" element={<Technology />} />
                        <Route path="/Tripsage/destination/:postSlug" element={<Planet />} />
                        <Route path="/Tripsage/destination/src/TajMahal" element={<TajMahal />} />
                <Route path="/Tripsage/destination/src/HawaMahal" element={<HawaMahal />} />
                <Route path="/Tripsage/destination/src/AmberFort" element={<AmberFort />} />
                <Route path="/Tripsage/destination/src/WTP" element={<WTP />} />
           
                    </Routes>
                </Router>
            </div>

            <footer className="h-20 text-center flex justify-center items-center">
                Coded by &nbsp; <span><a href="">TripSage</a></span>, Challenge by &nbsp;
                <span><a href="">TripSage Team</a></span>
            </footer>
        </>
    );
}

export default App;
