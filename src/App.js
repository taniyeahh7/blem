
import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
import Intro from "./components/Intro"
import Login from "./components/Login"
import Landing from "./components/Landing"
import Signup from "./components/Signup"
import Order from "./components/Order"
import PostMyActivity1 from "./components/PostMyActivity1"

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
            <Route path="/postmyact1" element={<PostMyActivity1/>}/>
          </Routes>
        </Router>
    </div>
    
  );
}

export default App;
