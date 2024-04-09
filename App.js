    import logo from './logo.svg';
    import './App.css';
    import Home from './COMPONENTS/home';
    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
    import About from './COMPONENTS/about';
    import logoimage from './COMPONENTS/applogo.png'
    import Login from './COMPONENTS/login';
    import Contact from './COMPONENTS/Contact';
    import Register from './COMPONENTS/registerpage';
    import { useState } from 'react';

    function App() {
        const [isLoggedIn, setIsLoggedIn] = useState(false);
      
        const handleLoginSuccess = () => {
          setIsLoggedIn(true);
        };
        const handleLogout = () => {
            setIsLoggedIn(false);
          };
      
        return (
          <div className="App">
            <BrowserRouter>
              <nav>
                <div className='navbar'>
                  <img src={logoimage} alt="Logo" />
                  <ul>
                    <li><Link to='/' style={{ color: 'black', fontSize: '20px' }}>Home</Link></li>
                    <li><Link to='/about' style={{ color: 'black', fontSize: '20px' }}>About</Link></li>
                    {isLoggedIn ?
                <li><button onClick={handleLogout} style={{ color: 'black', fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button></li> :
                <li><Link to='/login' style={{ color: 'black', fontSize: '20px' }}>Login</Link></li>}
                                 <li><Link to='/contact' style={{ color: 'black', fontSize: '20px' }}>Contact</Link></li>
                  </ul>
                </div>
              </nav>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/registerpage" element={<Register />} />
              </Routes>
            </BrowserRouter>
          </div>
        );
      }
      
      export default App;