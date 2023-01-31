
import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
import Intro from "./components/Intro"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Signup from "./components/Signup"
import Order from "./components/Order"
import Postmyactivity from "./components/Postmyactivity"
import Successful from "./components/Successful"
import Unsuccessful from "./components/Unsuccessful"

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/postmyact1" element={<Postmyactivity/>}/>
            <Route path="/successful" element={<Successful/>}/>
            <Route path="/unsuccessful" element={<Unsuccessful/>}/>
          </Routes>
        </Router>
    </div>
    
  );
}

export default App;
