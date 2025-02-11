import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar'
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import Tasks from './components/pages/Tasks';
import NewTask from './components/pages/NewTask';
import './App.css'

const App = () => {
  
  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/newtask' element={<NewTask />} />
      </Routes>
      </Container>
    </Router>
  )
}

export default App
