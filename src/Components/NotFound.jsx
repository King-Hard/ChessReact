import {Link} from 'react-router-dom'

const NotFound = () =>{
    return(
        <div className='flex justify-center min-h-screen items-center text-3xl'>
            <div className='space-y-3'>
                <p className='text-center font-medium text-6xl'>404</p>
                <span>File not found! Back to </span>
                <Link to='/' className='text-blue-700 hover:underline'>Home Page</Link>
            </div>
        </div> 
    )
}

export default NotFound