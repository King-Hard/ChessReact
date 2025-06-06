const Practice = () =>{
    const mathImage = () =>{
        return `/src/assets/R.jpg`
    }

    const historyImage = () =>{
        return `/src/assets/Wiles.jpg`
    }

    const people = [
        {name: "Luna", profession: "Mathematician"},
        {name: "Rivera", profession: "Historican"},
        {name: "Velasco", profession: "Scientist"}, 
        {name: "Cruz", profession: "Historican"},
        {name: "Vega", profession: "Mathematician"},
        {name: "Santiago", profession: "Mathematician"}
    ]

    const mathematicians = people.filter(person => 
        person.profession === "Mathematician"
    )

    const MATH = mathematicians.map(person =>
        <li>
            <img 
                src={mathImage(person)}
                alt={person.name}
                width={100}
                height={100}
            />

            <p>
                {person.name} - {person.profession}
            </p>
        </li>
    )

    const historicians = people.filter(person =>
        person.profession === "Historican"
    )
        
    const HISTORY = historicians.map(person =>
        <li>
            <img
                src={historyImage(person)}
                alt={person.name}
                width={100}
                height={100}
            />

            <p>
                {person.name} - {person.profession}
            </p>
        </li>
    )
    return(
        <div>
            <ol>
                {HISTORY}
            </ol>
            <ul>
                {MATH}
            </ul>
        </div>
    )
}

export default Practice