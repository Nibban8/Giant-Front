import React, { useState, useEffect } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { db } from '../../firebase';

import Parts from '../Parts/Parts';

export default function Ensamble() {
  // la funcion .onSnapshot ofrece datos en tiempo real
  // si la base de datos cambia, hace fetch de forma automatica

  //   const getParts = async () => {
  //     db.collection('partes').onSnapshot((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());
  //       });
  //     });
  //   };

  const tipos = [
    { nombre: 'Procesador', valor: 'cpu' },
    { nombre: 'Tarjeta Madre', valor: 'mb' },
    { nombre: 'Memoria RAM', valor: 'ram' },
    { nombre: 'Tarjeta Grafica', valor: 'gpu' },
    { nombre: 'HDD', valor: 'hdd' },
    { nombre: 'SSD', valor: 'ssd' },
  ];

  const panes = tipos.map((tipo) => {
    return {
      menuItem: tipo.nombre,
      render: () => (
        <Tab.Pane>
          <Parts parts={partes.filter((part) => part.tipo === tipo.valor)} />
        </Tab.Pane>
      ),
    };
  });

  const [partes, setPartes] = useState([]);

  const getParts = async () => {
    const querySnapshot = await db.collection('partes').get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    console.log(docs);
    setPartes(docs);
  };

  useEffect(() => {
    getParts();
  }, []);

  return (
    <Container className='content'>
      <Tab
        menu={{
          color: 'blue',
          inverted: true,
          fluid: true,
          vertical: true,
          tabular: 'right',
        }}
        panes={panes}
      />
    </Container>
  );
}
