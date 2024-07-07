import "../App.css"

function Square({value, onSquareClick}){
    return(
    <>
     {console.log("square.jsx")}
     <button className="square" onClick={onSquareClick}>{value}</button>
    
    </>)
}

export default Square;