import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { Button, Container, Form, Select } from 'semantic-ui-react';
import { db } from '../../firebase';

import './styles.css';

const AddPart = () => {
  const initialData = {
    nombre: '',
    marca: '',
    tipo: '',
    interfaz: '',
    descripcion: '',
    selectedFile: '',
    precio: '',
  };

  const tipoOptions = [
    { key: 'cpu', text: 'CPU', value: 'cpu' },
    { key: 'gpu', text: 'GPU', value: 'gpu' },
    { key: 'ram', text: 'RAM', value: 'ram' },
    { key: 'ssd', text: 'SSD', value: 'ssd' },
    { key: 'hdd', text: 'HDD', value: 'hdd' },
    { key: 'mb', text: 'Motherboard', value: 'mb' },
    { key: 'ps', text: 'Fuente', value: 'ps' },
    { key: 'case', text: 'Gabinete', value: 'case' },
  ];

  const [partData, setPartData] = useState(initialData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(partData);
    await db.collection('partes').doc().set(partData);

    handleClear(e);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setPartData(initialData);
  };

  return (
    <Container className='from'>
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
          <label>Precio</label>
          <input
            value={partData.precio}
            onChange={(e) =>
              setPartData({ ...partData, precio: e.target.value })
            }
            placeholder='Precio'
          />
        </Form.Field>

        <Form.Field>
          <label>Tipo</label>
          <Select
            onChange={(e, data) =>
              setPartData({ ...partData, tipo: data.value })
            }
            value={partData.tipo}
            options={tipoOptions}
            placeholder='Tipo'
          />
        </Form.Field>

        <Form.Field>
          <label>Interfaz</label>
          <input
            value={partData.interfaz}
            onChange={(e) =>
              setPartData({ ...partData, interfaz: e.target.value })
            }
            placeholder='Interfaz'
          />
        </Form.Field>
        <Form.Field>
          <label>Descripcion</label>
          <input
            value={partData.descripcion}
            onChange={(e) =>
              setPartData({ ...partData, descripcion: e.target.value })
            }
            placeholder='Descripcion'
          />
        </Form.Field>
        <div>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPartData({ ...partData, selectedFile: base64 })
            }
          />
        </div>

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
