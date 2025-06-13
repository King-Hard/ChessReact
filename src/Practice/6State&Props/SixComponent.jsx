const SixComponent = ({count, handleIncrement, handleDecrement}) =>{
    return(
        <>
        
            <div>
                <p>Count: {count}</p>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        
        </>
    )
}

export default SixComponent