import React, { useState, useEffect } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { db } from '../../firebase';

import Parts from '../Parts/Parts';

export default function Ensamble() {
  const [ensamble, setEnsamble] = useState({
    cpu: '',
    mb: '',
    ram: '',
    gpu: '',
    hdd: '',
    ssd: '',
  });

  const handleSelect = (part) => {
    let res = {};
    switch (part.tipo) {
      case 'cpu':
        res = { cpu: part };
        break;
      case 'mb':
        res = { mb: part };
        break;
      case 'ram':
        res = { ram: part };
        break;
      case 'gpu':
        res = { gpu: part };
        break;
      case 'hdd':
        res = { hdd: part };
        break;
      case 'ssd':
        res = { ssd: part };
        break;
      default:
        break;
    }

    setEnsamble({ ...ensamble, ...res });
  };

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
          <Parts
            selected={Object.values(ensamble)}
            handleSelect={handleSelect}
            parts={partes.filter((part) => part.tipo === tipo.valor)}
          />
        </Tab.Pane>
      ),
    };
  });

  const resumen = {
    menuItem: 'Resumen',
    render: () => (
      <Tab.Pane>
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
      <Tab
        menu={{
          inverted: true,
          fluid: true,
        }}
        panes={panes.concat(resumen)}
      />
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
