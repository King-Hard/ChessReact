import {Link} from 'react-router-dom'

const NotFound = () =>{
    return(
        <div>
            <div>
                <p>404</p>
                <Link to='/'>Back to <span className='text-blue-700 hover:underline'>Home Page</span></Link>
            </div>
        </div>
    )
}

export default NotFound