import React, { useState } from 'react';

import { List, Button, Form } from 'semantic-ui-react';

import { db } from '../../firebase';

import './styles.css';

export default function ListPart({ parte }) {
  const [sure, setSure] = useState(false);

  const [partData, setPartData] = useState({
    cantidad: parte.cantidad,
    precio: parte.precio,
  });

  const toggleSure = () => {
    setSure(!sure);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sure) {
      // console.log('ID ', parte.id);
      // console.log('Data ', partData);
      await db
        .collection('partes')
        .doc(parte.id)
        .set(partData, { merge: true });
    }

    setSure(false);
  };

  return (
    <List.Item>
      <h5>{parte.nombre}</h5>
      <Form onSubmit={handleSubmit} className='parte'>
        <Form.Group widths='equal'>
          <Form.Input
            onChange={(e) => {
              setPartData({ ...partData, cantidad: e.target.value });
            }}
            value={partData.cantidad}
            fluid
            label='Cantidad'
          />
          <Form.Input
            onChange={(e) => {
              setPartData({ ...partData, precio: e.target.value });
            }}
            value={partData.precio}
            fluid
            label='Precio'
          />
        </Form.Group>
        <Form.Checkbox
          checked={sure}
          onChange={toggleSure}
          label='Estoy seguro'
        />
        <Button type='submit'>Submit</Button>
      </Form>

      {/* <List.Content floated='right'>
        Cantidad: <Input placeholder={parte.cantidad} />{' '}
        <Button icon>
          <Icon name='save' />
        </Button>
      </List.Content>
      <List.Content floated='right'>
        Precio : <Input placeholder={parte.precio} />{' '}
        <Button icon>
          <Icon name='save' />
        </Button>
      </List.Content>

      <List.Content>{parte.nombre}</List.Content> */}
    </List.Item>
  );
}
