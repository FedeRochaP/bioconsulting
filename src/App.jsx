import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
