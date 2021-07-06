import logo from './logo.svg';
import './App.css';
import imageSrc from './imageInSrc.jpg';
import videop from "./myVideo.mp4";
import "./style.css"

function App() {
  let name = "Mahmoud Zaouchi";

  return (
   <div>
     <div style={{border : "solide 1px black",maxWidth : "100vw"}}>
        <h1 className={"title red"}>{name}</h1>
        <br/>
        <img src={imageSrc} width="400px" height="400px"/>
        <br/>
        <img src="/imageInPublic.jpg" width="400px" height="400px"/>
      </div>
      <video width="320" height="240" controls >
          <source src={videop} type="video/mp4"/>
      </video>
   </div>
  );
}

export default App;
