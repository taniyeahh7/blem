import './index.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
        {/* <img src={introimg} alt='bleee' /> */}
        <Navbar />
        <div className='react-parent'>
          <div className="introinfo-left">
            <div className='left-child'>
              <h3>Reliable fast friendly</h3>
            </div>
          </div>
          <div className="introinfo-right">
            <div className="right-child">
              <h4> 
              Add your friends with a friend recommendation system
              </h4>
              <h4>
              Access their location using our live location access feature
              </h4>
              <h4>
              Choose friend according to proximity or preference
              </h4>
              <h4>
              Send pick-up Request
              </h4>
            </div>
          </div>
          
        </div>
    </div>
    
  );
}

export default App;
