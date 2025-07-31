import DivEmotions from "./DivEmotions.jsx";

const emotionList = [
    {emotion:'Happy 😁', color:"yellow"},
    {emotion:'Sad 😭', color:"lightblue"},
    {emotion:'Neutral 😐', color:"gray"},
    {emotion:'Angry 😠', color:"red"},
    {emotion:'Afraid 😧', color:"purple"},
]

function App() {
    return(
        <div className="main-div">
            {emotionList.map((element, index)=>{
                return(<DivEmotions key={index} emotion={element.emotion} color={element.color} />);
            })}
        </div>
    );
}

export default App;