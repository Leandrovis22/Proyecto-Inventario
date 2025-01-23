/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20"> {/* Added pt-20 to create space for fixed header */}
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App

