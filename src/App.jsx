import './App.css'
import ImageCard from "./ImageCard.jsx";
import Hobbies from "./Hobbies.jsx";

function App(props) {
  return (
      <>
          <h1>{props.data.name}</h1>
          <ImageCard src={props.data.imageURL} name={props.data.name}/>
          <Hobbies hobbyList={props.data.hobbyList}/>
      </>
  )
}

export default App;
