import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Porducts } from './pages/products'
import { EditPorducts } from './pages/editProducts'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes  >
                <Route index path='/' element={<Home />} />
                <Route index path='/products' element={<Porducts />} />
                <Route index path='/products/edit/:id' element={<EditPorducts />} />
                <Route index path='/products/edit' element={<EditPorducts />} />
                <Route path="*" element={<h1>Not Found! (404)</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

