import React from "react";
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      names : ['Argen' , 'Maksat' , 'lily']
    }
  }
  render(){
    return(
      <div className="App">
        <ul>
          <li>{this.state.names[0]}</li>
          <li>{this.state.names[1]}</li>
          <li>{this.state.names[2]}</li>
        </ul>
      </div>
    )
  }
}
export default App
