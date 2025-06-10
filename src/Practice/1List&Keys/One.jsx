const One = () =>{

    const people = [
        {name: "Luna", profession: "Mathematician"},
        {name: "Rivera", profession: "Historican"},
        {name: "Velasco", profession: "Historician"}, 
        {name: "Cruz", profession: "Historician"},
        {name: "Vega", profession: "Mathematician"},
        {name: "Santiago", profession: "Mathematician"}
    ]

    const mathImage = () =>{
        return `/src/assets/R.jpg`
    }

    const mathematicians = people
        .filter(math => math.profession === "Mathematician")
        .map(math =>
        <li>
            <img 
                src={mathImage()}
                alt={math.name}
                width={100}
            />

            <p>{math.name} - {math.profession}</p>
        </li>
        )

        const histoyImage = () =>{
            return '/src/assets/Wiles.jpg'
        }

        const historicians = people
            .filter(history => history.profession === "Historician")
            .map(history =>
                <li className='place-items-center'>
                    <img
                        className='mb-2 rounded-lg'
                        src={histoyImage()}
                        alt={history.name}
                        width={100}
                    />

                    <p className='border p-2 rounded-lg mb-2 font-medium'>{history.name} - {history.profession}</p>
                </li>
            )

    return(
        <div className='bg-amber-200 flex'>
            <div>
                <ul>
                    {mathematicians}
                </ul>
            </div>
            
            <div>
                <ol>
                    {historicians}
                </ol>
            </div>
        </div>
    )
}

export default One




