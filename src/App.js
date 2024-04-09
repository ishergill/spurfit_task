// !components
import EmotionCards from './components/EmotionCards';
import Eqbeats from './components/Eqbeats';
import Header from './components/Header';
import MeetAhead from './components/MeetAhead';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Eqbeats/>
      <EmotionCards/>
      <MeetAhead/>
    </div>
  );
}

export default App;
