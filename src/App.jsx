import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import FunPage from './FunPage'

function App() {
    return (
        <BrowserRouter basename="/Zoey-Zhu-Website">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fun" element={<FunPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App