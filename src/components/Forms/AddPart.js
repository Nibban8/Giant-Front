import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { Button, Container, Form } from 'semantic-ui-react';
import { createPart } from '../../actions/parts';

const AddPart = () => {
  const initialData = {
    nombre: '',
    marca: '',
    tipo: '',
    interfaz: '',
    tags: '',
    selectedFile: '',
  };

  const [partData, setPartData] = useState(initialData);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPart(partData));
    handleClear(e);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPartData(initialData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field inline>
          <label>Nombre</label>
          <input
            value={partData.nombre}
            onChange={(e) =>
              setPartData({ ...partData, nombre: e.target.value })
            }
            placeholder='Nombre'
          />
        </Form.Field>
        <Form.Field inline>
          <label>Marca</label>
          <input
            value={partData.marca}
            onChange={(e) =>
              setPartData({ ...partData, marca: e.target.value })
            }
            placeholder='Marca'
          />
        </Form.Field>
        <Form.Field inline>
          <label>Tipo</label>
          <input
            value={partData.tipo}
            onChange={(e) => setPartData({ ...partData, tipo: e.target.value })}
            placeholder='Tipo'
          />
        </Form.Field>
        <Form.Field inline>
          <label>Interfaz</label>
          <input
            value={partData.interfaz}
            onChange={(e) =>
              setPartData({ ...partData, interfaz: e.target.value })
            }
            placeholder='Interfaz'
          />
        </Form.Field>
        <Form.Field inline>
          <label>Tags</label>
          <input
            value={partData.tags}
            onChange={(e) => setPartData({ ...partData, tags: e.target.value })}
            placeholder='Tags'
          />
        </Form.Field>
        <Form.Field label='Imagen' control='button'>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPartData({ ...partData, selectedFile: base64 })
            }
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
