// !components
import BeBest from './components/BeBest';
import BeforeStarted from './components/BeforeStarted';
import EmotionCards from './components/EmotionCards';
import Eqbeats from './components/Eqbeats';
import Footer from './components/Footer';
import Header from './components/Header';
import MeetAhead from './components/MeetAhead';
import Navbar from './components/Navbar';
import OpenVacancies from './components/OpenVacancies';
import Stepper from './components/Stepper';
import ThinkOfYou from './components/ThinkOfYou';
import WorkWithUs from './components/WorkWithUs';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Eqbeats/>
      <EmotionCards/>
      <MeetAhead/>
      <Stepper/>
      <BeBest />
      <ThinkOfYou/>
      <BeforeStarted/>
      <WorkWithUs/>
      <OpenVacancies/>
      <Footer/>
    </div>
  );
}

export default App;
