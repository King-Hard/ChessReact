import { Link } from "react-router-dom"

const Three = () =>{
    const people = [
        {id: 1, name: "Hard", age: 15},
        {id: 2, name: "Herd", age: 23},
        {id: 3, name: "Hird", age: 17},
        {id: 4, name: "Hord", age: 18},
        {id: 5, name: "Hurd", age: 42}
    ]

    return(
        <>
        
            <table className='border border-separate border-spacing-5 rounded-xl bg-gray-200'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>STATUS</th>
                    </tr>
                </thead>

                <tbody>
                    {people.map((person, index) =>{
                        return(
                            <tr key={index} className='text-center'>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age >= 18 ? <p className='text-green-500'>Legal Age</p> : <p className='text-red-500'>Not Legal Age</p>}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        
        </>
    )
}

export default Three