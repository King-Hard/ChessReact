import ThemeContext from "./ThemeContex"

const ThemeButton = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <>
        
            <div>
                {console.log(theme, toggleTheme)}
            </div>
        
        </>
    )
}

export default ThemeButton