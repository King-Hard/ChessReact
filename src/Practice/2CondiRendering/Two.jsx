const Two = () =>{

    const cities = ["Manila", "Cebu", "Bacolod", "Davao"]

    const people = [
        {id: 1, name: "Hard", age: 15},
        {id: 2, name: "Herd", age: 23},
        {id: 3, name: "Hird", age: 17},
        {id: 4, name: "Hord", age: 18},
        {id: 5, name: "Hurd", age: 42}
    ]

    return(
        <>
            {cities.map((city, index) =>{
                return(
                    <ul key={index} className='border p-2 rounded-lg m-2'>
                        <li>{city}</li>
                    </ul>
                )
            })}


            <table className='border border-separate border-spacing-5 rounded-lg m-2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>

                <tbody>
                    {people.map((person, index) =>{
                        return(
                            <tr key={index} className='text-center'>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
 
export default Two