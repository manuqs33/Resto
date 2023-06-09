import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {StartPage} from './pages/StartPage'
import {AboutPage} from './pages/AboutPage'
import {ChefPage} from './pages/ChefPage'
import {TeamPage} from './pages/TeamPage'
import {OpinionsPage} from './pages/OpinionsPage'
import {JobOpeningsPage} from './pages/JobOpeningsPage'
import {MenusPage} from './pages/MenusPage'
import {Footer} from "./components/Footer";
import {Navbar} from './components/Navbar';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/chef" element={<ChefPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/opinions" element={<OpinionsPage/>} />
        <Route path="/jobopenings"  element={<JobOpeningsPage/>} />
        <Route path="/menus" element={<MenusPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
