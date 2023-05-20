import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Porducts } from './pages/products'
import { EditPorducts } from './pages/editProducts'
import { Report } from './pages/report'
import { TagGenerator } from './pages/tagGenerator/'
import { Sigin } from './components/sigin'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route index path='/' Component={Home} />
                <Route path='/tagGenerator' Component={TagGenerator} />
                <Route path='/products' Component={Porducts} />
                <Route path='/products/edit/:id' Component={EditPorducts} />
                <Route path='/products/edit' Component={EditPorducts} />
                <Route path='/report' Component={Report} />
                <Route path="*" element={<h1>Not Found! (404)</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

