import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { store } from './store'
import { Provider } from 'react-redux'

//Pages
import Dashboard from './pages/Dashboard';
import ItemDetail from './pages/ItemDetail';
import Login from './pages/Login';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/calzado' element={<Dashboard />} />
            <Route path='/item' element={<ItemDetail />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
