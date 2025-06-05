import {Link} from 'react-router-dom'

const Header = () =>{
  return(
    
      <div className='flex justify-between p-10 border rounded-lg rounded-t-none'>
        <div>Header</div>

        <div className='space-x-10'>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </div>
    
  )
}

export default Header