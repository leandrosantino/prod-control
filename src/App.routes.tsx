import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes  >
                <Route index path='/' element={<Home />} />
                <Route path="*" element={<h1>Not Found! (404)</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

