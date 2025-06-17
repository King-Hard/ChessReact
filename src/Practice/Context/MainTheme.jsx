import ThemeProvider from "../Context/ThemeProvider"
import ThemeButton from "../Context/ThemeButton"

const MainTheme = () =>{
    
    
    return(
       <ThemeProvider>
            <div>
                <h1>Theme Context</h1>
            </div>

            <ThemeButton />
       </ThemeProvider>
    )
}

export default MainTheme

