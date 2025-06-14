import RootLayout from './Shared/Layout/RootLayout'
import NotFound from './Components/NotFound'
import Home from './Components/NavigationBar/Home'
import About from './Components/NavigationBar/About'
import Contact from './Components/NavigationBar/Contact'
import { Routes, Route } from 'react-router-dom'
import One from './Practice/1List&Keys/One'
import Two from './Practice/2CondiRendering/Two'
import Three from './Practice/3ConditionalRendering/Three'
import Four from './Practice/4HandlingEvents/Four'
import Five from './Practice/5MaterialUi/Five'
import Six from './Practice/6State&Props/Six'
import Seven from './Practice/7Hooks/Seven'

const App = () =>{
  return(
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/One' element={<One />}/>
        <Route path='/Two' element={<Two />}/>
        <Route path='/Three' element={<Three />}/>
        <Route path='/Four' element={<Four />}/>
        <Route path='/Five' element={<Five />}/>
        <Route path='/Six' element={<Six />}/>
        <Route path='/Seven' element={<Seven />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App