import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import StripePage from './StripePage'
import SuccessPage from './SuccessPage'

import { OpenAPI } from './server';

OpenAPI.BASE = 'http://localhost:8000';

function App() {
  return (
    <Router basename={""}>
      <Routes>
        <Route index Component={StripePage} />
        <Route path="/success" Component={SuccessPage} />
        </Routes>
    </Router>
  )
}

export default App
