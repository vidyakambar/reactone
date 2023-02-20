import React, { useState } from "react";
import Class1 from "./classcomponent/Class1";
import Function1 from "./classcomponent/Function1"



function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = () => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = () => setClsHidden((current) => !current);

  return (
    <div className="Application">
      <h1 className="heading1">Styling using Functional and Class Component</h1>
 <div className="btnbox">
        <button className="btn btn--func" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="componentbox">
        {!funcHidden ? <Function1/> : null}
        {!clsHidden ? <Class1 /> : null}
      </div>
    </div>
  );
}

export default App;