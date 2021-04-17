import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Container, Form } from 'semantic-ui-react';
import { createPart } from '../../actions/parts';

const AddPart = () => {
  const [partData, setPartData] = useState({
    nombre: '',
    marca: '',
    tipo: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPart(partData));
  };

  const handleClear = () => {};

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nombre</label>
          <input
            value={partData.nombre}
            onChange={(e) =>
              setPartData({ ...partData, nombre: e.target.value })
            }
            placeholder='Nombre'
          />
        </Form.Field>
        <Form.Field>
          <label>Marca</label>
          <input
            value={partData.marca}
            onChange={(e) =>
              setPartData({ ...partData, marca: e.target.value })
            }
            placeholder='Marca'
          />
        </Form.Field>
        <Form.Field>
          <label>Tipo</label>
          <input
            value={partData.tipo}
            onChange={(e) => setPartData({ ...partData, tipo: e.target.value })}
            placeholder='Tipo'
          />
        </Form.Field>

        <Button positive type='submit'>
          Agregar
        </Button>
        <Button onClick={handleClear} negative type='submit'>
          Limpiar
        </Button>
      </Form>
    </Container>
  );
};

export default AddPart;
