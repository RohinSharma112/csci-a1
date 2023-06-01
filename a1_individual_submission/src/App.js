import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Title from './components/title/Title';
import FilterBar from './components/filterbar/Filterbar';
import Homepage from './pages/homepage/Homepage';
import Catalogue from './pages/catalogue/Catalogue';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import MainEvent from './pages/events/MainEvent';
import EventRegistation from './pages/registration/EventRegistration'

function App() {
  return (
    <div>
      <Title />
      <Navbar />
      <FilterBar />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/catalogue" element={<Catalogue />}/>
      <Route path="/events" element={<Events />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/event/:id" element={<MainEvent />}/>
      <Route path="/eventregistration" element={<EventRegistation />}/>
      </Routes>
    </div>
  );
}

export default App;