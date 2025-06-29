import "./App.css";
import { Component } from "react";

class Button extends Component {
  render() {
    console.log('Ejecutando metodo render de button')
    return (
      <button>
        Enviar
      </button>
    )
  }
}
class App extends Component {
  state = {
    valor: 0
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello World</p>
        <Button />
        <button 
          className={`${this.state.valor}`} 
          onClick={() => this.setState({ valor: 24 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;