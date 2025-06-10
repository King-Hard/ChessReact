# Rendering List

Sa rendering list natin meron tayong format na:

const cities = ["city1", "city2", "city3"]
<ul>
    {people.map((city, index) =>{
        return(
            <li key={index}>
                {city}
            </li>
        )
    })}
</ul>


Yung city natin sya yung bawat city sa loob ng cities container, and then yung index natin sya yung magsisilbing handle para sa key={index} function natin. Sa body sya dapat lagi nakalagay example body natin <ul> and then child natin <li>

Ngayon 

