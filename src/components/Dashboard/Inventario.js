import React, { useState, useEffect } from 'react';
import { List, Segment, Button, Icon, Label } from 'semantic-ui-react';
import { db } from '../../firebase';
import ListPart from './ListPart';

import './styles.css';

export default function Inventario() {
  const [partes, setPartes] = useState([]);

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const getParts = async () => {
    const querySnapshot = await db.collection('partes').get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    setPartes(docs);
  };

  useEffect(() => {
    getParts();
  }, []);

  return (
    <>
      <Segment>
        <List divided verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button onClick={toggleEdit} color='green' icon>
                <Icon name='edit' />
              </Button>
            </List.Content>
            <List.Header>
              <h2>Inventario</h2>
            </List.Header>
          </List.Item>

          {partes.map((parte) => {
            let colorCantidad = 'green';

            if (parte.cantidad <= 3) colorCantidad = 'yellow';

            if (parte.cantidad <= 0) colorCantidad = 'red';

            let lista = (
              <List.Item>
                <List.Content floated='right'>
                  <Label color={colorCantidad} size='large'>
                    Cantidad : {parte.cantidad}
                  </Label>
                </List.Content>
                <List.Content floated='right'>
                  <Label size='large'>Precio : ${parte.precio}</Label>
                </List.Content>

                <List.Content>{parte.nombre}</List.Content>
              </List.Item>
            );

            if (edit) {
              lista = <ListPart parte={parte} />;
            }

            return lista;
          })}
        </List>
      </Segment>
    </>
  );
}
