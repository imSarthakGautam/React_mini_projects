import '../App.css'
export default function Square( {value, id}){
   function handleClick()
   {
        console.log(`button ${id} clicked`)
    }


    return (
        <>
        <button className='square' onClick={handleClick} id={id}> {value}</button>
        </>
    );
        
}