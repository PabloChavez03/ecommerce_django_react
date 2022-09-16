import { Routes,Route } from 'react-router-dom'
import Error404 from './containers/errors/Error404'
import Home from './containers/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App