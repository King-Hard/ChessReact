import {Link} from 'react-router-dom'

const Form = () =>{
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log("hsahas")
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center min-h-screen items-center bg-gray-200">
                    <div className="border rounded-lg p-7 w-95 bg-white">
                        <div className="text-center mb-5">
                            <h1 className="text-xl font-medium">Welcome to Avalmeos</h1>
                            <p className="text-md">Log in using the form below</p>
                        </div>
                        <div className="mb-4">
                            <label className="font-semibold">Email</label>
                            <input className="w-full border rounded-lg p-3 font-semibold placeholder:font-semibold" type="email" placeholder="example@gmail.com"/>
                        </div>
                        <div className="mb-5">
                            <div className="flex justify-between items-center">
                                <label className="font-semibold">Password</label>
                                <Link to="/ForgotPass" className="text-blue-600 hover:underline">Forgot Password?</Link>
                            </div>
                            <input className="w-full border rounded-lg p-3 font-semibold placeholder:font-semibold" type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <button type="submit" className="border rounded-lg p-3 w-full bg-blue-600 text-white text-lg font-semibold">Log in</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form