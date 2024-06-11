import Square from "./Square";
 import '../App.css'
export default function Board(){
    return (
    <>
    <div className="ttt">
       <div className="boardRow"> 
       <Square id= "1" />
        <Square id= "2"/>
        <Square id= "3" />
        </div>

        <div className="boardRow"> 
        <Square id= "4" />
        <Square id= "5" />
        <Square id= "6" />
        </div>

        <div className="boardRow"> 
        <Square id= "7" />
        <Square id= "8" />
        <Square id= "9" />
        </div>
    </div>
    </>
    );
}