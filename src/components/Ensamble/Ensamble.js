import React, { useState, useEffect } from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { db } from '../../firebase';
import { EnsambleContext } from './EnsambleContext';

import Parts from './Parts';
import Steps from '../Steps/Steps';
import Resumen from './Resumen';

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

  const panes = tipos.map((tipo, index) => {
    return {
      menuItem: tipo.nombre,
      render: () => (
        <Tab.Pane id={index}>
          <Parts parts={partes.filter((part) => part.tipo === tipo.valor)} />
        </Tab.Pane>
      ),
    };
  });

  const resumen = {
    menuItem: 'Resumen',
    render: () => <Resumen />,
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

  useEffect(() => {}, [ensamble]);

  useEffect(() => {
    getParts();
  }, []);
  const handleClick = () => {
    let elementQuote, elementPDF, elementTab;
    elementTab = document.getElementsByClassName('active item');
    elementQuote = document.getElementById('stepQuote');
    elementPDF = document.getElementById('stepPDF');
    console.log(elementTab);
    if (elementTab[0].text === 'Resumen') {
      if (elementPDF.classList.contains('active')) {
        return 0;
      } else {
        elementPDF.classList.toggle('active');
        elementQuote.classList.toggle('active');
      }
    } else {
      if (!elementQuote.classList.contains('active')) {
        elementPDF.classList.toggle('active');
        elementQuote.classList.toggle('active');
      }
    }
  };
  return (
    <Container className='content'>
      <Steps />
      <EnsambleContext.Provider value={{ ensamble, setEnsamble }}>
        <Tab
          menu={{
            inverted: true,
            fluid: true,
          }}
          onTabChange={handleClick}
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
