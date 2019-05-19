import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Form from "./Form";

function App() {
  return(
    <div className="contenedor">
      <Header title="Cotizador de seguros"/>
      <Form/>
    </div>
  );
}

export default App;
