import { useState } from "react";

const Input = ({ value, onChange }) => {
  return (
    <input 
      value={value}
      onChange={onChange}
    />
  );
};

const App3 = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const updateNombre = (event) => {
    setNombre(event.target.value);
  };

  const updateApellido = (event) => {
    setApellido(event.target.value);
  };

  return (
    <div>
      <h1>Subiendo el Estado (Componente Funcional)</h1>
      <p>Nombre completo: {`${nombre} ${apellido}`}</p>
      <Input 
        value={nombre}
        onChange={updateNombre}
      />
      <Input 
        value={apellido}
        onChange={updateApellido}
      />
    </div>
  );
};

export default App3; 