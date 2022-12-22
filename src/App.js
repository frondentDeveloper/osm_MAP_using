import React, {useState} from "react";
import SearchBox from "./SearchBox";
import Map from "./Map";

function App() {

  const [selectPosition, setSelectPosition] = useState(null);

  console.log(selectPosition);

  return (
    <div style={{display:"flex", flexDirection:"row", width:"100%", height:"100vh"}}>

    <div style={{ width:"50vw"}}>
      <Map selectPosition={selectPosition}/>
    </div>

    <div style={{width:"50vw"}}>
      <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    </div>
    </div>
  );
}

export default App;
