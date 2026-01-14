import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import FunPage from './FunPage'
import NavigationBar from './NavBar'

function App() {
    return (
        <>
            <BrowserRouter basename="/Zoey-Zhu-Website">
                 <NavigationBar></NavigationBar>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/fun" element={<FunPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App