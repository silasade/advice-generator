import click from "./icon-dice.svg"
import divide from "./pattern-divider-mobile.svg"
function Advice(props){
    return (
        <div className="advice">
            <p className="ad">ADVICE # {props.id}</p>
            <h3>{props.advice}</h3>
            <br></br>
            
                    <img className="divide" src={divide} />
                
            <br/>
            
            <img onClick={props.onClick} className="click" src={click}  />        
        </div>
    )
}
export default Advice;