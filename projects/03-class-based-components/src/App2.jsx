import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input 
        value = {this.props.value}
        onChange = {this.props.onChange}
      />
    )
  }
}
class App2 extends Component {
  state = {
    nombre: '',
    apellido: '',
  }
  updateNombre = (value) => {
    this.updateValues('nombre', value.target.value)
  }
  updateApellido(value) {
    this.updateValues('apellido', value.target.value)
  }
  updateValues(prop, value) {
    this.setState({ [prop]: value })
  }
  render() {
    return (
        <div>
            <h1>Subiendo el Estado</h1>
            <p>Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
            <Input 
              value={this.state.nombre}
              onChange={this.updateNombre}
            />
            <Input 
              value={this.state.apellido}
              onChange={(arg) => this.updateApellido(arg)}
            />
            </p>
        </div>
    );
  }
}
export default App2
