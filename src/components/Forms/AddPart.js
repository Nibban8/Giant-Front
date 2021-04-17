import React, { useState } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

const AddPart = () => {
  const [partData, setPartData] = useState({
    nombre: '',
    marca: '',
    tipo: '',
  });

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Nombre</label>
          <input
            value={(e) => setPartData({ ...partData, nombre: e.target.value })}
            placeholder='Nombre'
          />
        </Form.Field>
        <Form.Field>
          <label>Marca</label>
          <input
            value={(e) => setPartData({ ...partData, marca: e.target.value })}
            placeholder='Marca'
          />
        </Form.Field>
        <Form.Field>
          <label>Tipo</label>
          <input
            value={(e) => setPartData({ ...partData, nombre: e.target.tipo })}
            placeholder='Tipo'
          />
        </Form.Field>

        <Button positive type='submit'>
          Agregar
        </Button>
        <Button negative type='submit'>
          Limpiar
        </Button>
      </Form>
    </Container>
  );
};

export default AddPart;
