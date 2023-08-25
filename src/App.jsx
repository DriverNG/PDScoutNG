import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/index.css";
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';


export default function App() {
  return (
          <Router>
              <header>
                <NavBar />
              </header>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </Router>      
  )
}




// const container = document.getElementById('root');
//const root = ReactDOM.createRoot(container);
// root.render(<Page />)