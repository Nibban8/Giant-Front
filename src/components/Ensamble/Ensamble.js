import React, { useState, useEffect } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { db } from '../../firebase';
import { EnsambleContext } from './EnsambleContext';

import Parts from './Parts';

export default function Ensamble() {
  const [ensamble, setEnsamble] = useState({
    cpu: '',
    mb: '',
    ram: '',
    gpu: '',
    hdd: '',
    ssd: '',
  });

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

  const resumen = {
    menuItem: 'Resumen',
    render: () => (
      <Tab.Pane style={{ color: 'white' }}>
        <h1>Resumen del pedido</h1>
        <div>{ensamble.cpu.nombre}</div>
        <div>{ensamble.mb.nombre}</div>
        <div>{ensamble.ram.nombre}</div>
        <div>{ensamble.gpu.nombre}</div>
        <div>{ensamble.hdd.nombre}</div>
        <div>{ensamble.ssd.nombre}</div>
      </Tab.Pane>
    ),
  };

  const [partes, setPartes] = useState([]);

  const getParts = async () => {
    const querySnapshot = await db.collection('partes').get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id, selected: false });
    });
    setPartes(docs);
  };

  useEffect(() => {
    getParts();
  }, []);

  useEffect(() => {
    console.log(ensamble);
    //console.log(panes);
  }, [ensamble]);

  useEffect(() => {
    getParts();
  }, []);

  return (
    <Container className='content'>
      <EnsambleContext.Provider value={{ ensamble, setEnsamble }}>
        <Tab
          menu={{
            inverted: true,
            fluid: true,
          }}
          panes={panes.concat(resumen)}
        />
      </EnsambleContext.Provider>
    </Container>
  );
}

// la funcion .onSnapshot ofrece datos en tiempo real
// si la base de datos cambia, hace fetch de forma automatica

//   const getParts = async () => {
//     db.collection('partes').onSnapshot((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });
//   };
