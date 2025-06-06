import RootLayout from './Shared/Layout/RootLayout'
import NotFound from './Components/NotFound'
import Home from './Components/NavigationBar/Home'
import About from './Components/NavigationBar/About'
import Contact from './Components/NavigationBar/Contact'
import { Routes, Route } from 'react-router-dom'
import One from './Practice/List&Keys/One'

const App = () =>{
  return(
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/One' element={<One />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App