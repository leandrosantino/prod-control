import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Porducts } from './pages/products'
import { EditPorducts } from './pages/editProducts'
import { Record } from './pages/record'
import { TagGenerator } from './pages/tagGenerator/'
import { NotFound } from './pages/404'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route index path='/' Component={Home} />
                <Route path='/tagGenerator' Component={TagGenerator} />
                <Route path='/products' Component={Porducts} />
                <Route path='/products/edit/:id' Component={EditPorducts} />
                <Route path='/products/edit' Component={EditPorducts} />
                <Route path='/record' Component={Record} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

