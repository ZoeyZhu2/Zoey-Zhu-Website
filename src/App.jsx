import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import FunPage from './FunPage'
import ProjectsPage from './ProjectsPage'
import NavigationBar from './NavBar'

function App() {
    return (
        <>
        <header>
            
        </header>
            <BrowserRouter basename="/Zoey-Zhu-Website">
                 <NavigationBar></NavigationBar>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/fun" element={<FunPage />} />    
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App