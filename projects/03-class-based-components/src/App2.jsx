import { Component } from "react";

class Input extends Component {
  state = { valor: ""}
  
  handleChange = (value) => {
    this.setState({ valor: value})
  }

  render() {
    return (
      <input 
      value = {this.state.value}
      onChange = {e => this.handleChange(e.target.value)}
      />
    )
  }
}
class App2 extends Component {
  render() {
    return (
        <div>
            <h1>Subiendo el Estado</h1>
            <p>Nombre completo: 
            <Input />
            <Input />
            </p>
        </div>
    );
  }
}
export default App2
