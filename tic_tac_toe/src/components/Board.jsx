import Square from "./Square";
 import '../App.css'
export default function Board(){
    return (
    <>
    <div className="ttt">
       <div className="boardRow"> 
       <Square id= "1" value="1" />
        <Square id= "2" value="2" />
        <Square id= "3" value="3" />
        </div>

        <div className="boardRow"> 
        <Square id= "4" value="4" />
        <Square id= "5" value="5" />
        <Square id= "6" value="6" />
        </div>

        <div className="boardRow"> 
        <Square id= "7" value="7" />
        <Square id= "8" value="8" />
        <Square id= "9" value="9" />
        </div>
    </div>
    </>
    );
}