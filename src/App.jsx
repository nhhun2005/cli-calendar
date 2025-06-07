import React, { useState, useEffect } from 'react'
import "./App.css";
import CLIOutput from './handleCommands';



function App() {
  
  const [cli, setCLI] = useState("");
  const [output, setOutput] = useState(null);
  function handleChangeCLI(e){
    setCLI(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    
    setOutput(<CLIOutput cli={cli}></CLIOutput>);
    setCLI("");


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the CLI here" value={cli} onChange={handleChangeCLI}></input>
        <input type="submit" />
        
      </form>

      {output}
    </div>
  );


}

export default App;
