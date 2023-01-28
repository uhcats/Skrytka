import Truck from './components/Truck';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound'
import Quiz from './components/Quiz';
const AppRoutes = () => {



  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/truck/:id' element={<Truck />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/truck/:id/:id' element={<Quiz />} />
    </Routes>
  )
}

export default AppRoutes;



