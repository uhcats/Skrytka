import Truck from './components/Truck';
import { Route, Routes, useRoutes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound'

const AppRoutes = () => {



  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/truck/:id' element={<Truck />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes;



