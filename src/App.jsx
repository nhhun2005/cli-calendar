import React, { useState, useEffect } from 'react'
import "./App.css";
import CLIOutput from './handleCommands';
import CalendarTable from './CalendarComponent';



function App() {
  
  const [cli, setCLI] = useState("");
  const [output, setOutput] = useState(null);
  const [dayData, setDayData] = useState([]);
  function handleChangeCLI(e){
    setCLI(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    const [command, ...args] = cli.trim().split(" ");
    let msg = null;
  
    switch (command) {
      case 'hello':
        msg = <p>Greeting {args.join(" ") || "User"}</p>;
        break;
  
      case 'sum':
        const val = args.reduce((sum, curr) => sum + Number(curr), 0);
        msg = <p>The sum is: {val}</p>;
        break;
  
      case 'create':
        const [day, title, time, duration] = args;
        const obj = {
          day,
          title,
          time: Number(time),
          duration: Number(duration)
        };
  
        const isDuplicate = dayData.some(event =>
          event.day === obj.day &&
          event.title === obj.title &&
          event.time === obj.time &&
          event.duration === obj.duration
        );
  
        if (isDuplicate) {
          msg = <p>Error: event duplicate!</p>;
        } else {
          setDayData(prev => [...prev, obj]);
          msg = <p>Added event successfully</p>;
        }
        break;
  
      case 'delete':
        const [indexStr] = args;
        const index = Number(indexStr);
        if (!Number.isInteger(index) || index < 0 || index >= dayData.length) {
          msg = <p>Error: invalid index</p>;
        } else {
          setDayData(prev => prev.filter((_, i) => i !== index));
          msg = <p>Deleted event at index {index}</p>;
        }
        break;
  
      default:
        msg = <p>There is no command: {command}</p>;
    }
  
    setOutput(msg);
    setCLI(""); // reset CLI input
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the CLI here" value={cli} onChange={handleChangeCLI}></input>
        <input type="submit" />
        
      </form>
      <h1>Calendar</h1>
      <CalendarTable days={dayData}></CalendarTable>
      {output}
    </div>
  );


}

export default App;
