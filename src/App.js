import './App.css';
import Availability from './components/availability/Availability';
import ChillAndRelax from './components/chillAndRelax/ChillAndRelax';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import IceLocation from './components/iceLocations/IceLocation';
import SponsorshipAndPayment from './components/sponsorAndPayment/SponsorshipAndPayment';

function App() {
  return (
    <div className="App">
     <Header />
     <SponsorshipAndPayment />
     <IceLocation />
     <ChillAndRelax/>
     <Availability/>
     <Footer />
    </div>
  );
}

export default App;
