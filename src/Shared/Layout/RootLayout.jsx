import Header from '../Partial/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () =>{
  return(
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default RootLayout