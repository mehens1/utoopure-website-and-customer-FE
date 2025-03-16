import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './layouts/layouts'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
