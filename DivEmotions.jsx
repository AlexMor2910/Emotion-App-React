import {useState} from "react";

export default function DivEmotions(props) {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter+1);
        document.body.style.backgroundColor = props.color;
    }

    return(
        <div className="button-div" style={{backgroundColor: props.color}}>
            <button className="button-emotion" onClick={increment}>{props.emotion}</button>
            <p className="paragraph-emotion">{counter} time{counter!==1 ? 's' : ''}</p>
        </div>
    );
}