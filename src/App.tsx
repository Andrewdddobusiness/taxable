import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Application from "./pages/Application"
import Features from "./pages/Features"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navigation/>
      <Container>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/application" element={<Application/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
