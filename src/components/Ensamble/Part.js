import React, { useContext } from 'react';

import { Card, Button } from 'semantic-ui-react';
import { EnsambleContext } from './EnsambleContext';

const Part = ({ part, selected }) => {
  // const part = {
  //   nombre: 'Ryzen 7 3800X',
  //   marca: 'AMD',
  //   tipo: 'procesador',
  //   interface: 'AM4',
  //   tags: ['3.90GHz', '8-Core', '32MB L3 Cache'],
  //   selectedFile:
  //     'https://www.xtremetecpc.com/wp-content/uploads/2019/11/7-3800X.jpg',
  // };

  const { ensamble, setEnsamble } = useContext(EnsambleContext);

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

  return (
    <Card>
      <img
        className='part-img'
        src={part.selectedFile}
        alt={part.nombre}
        width='250'
        height='250'
      />
      <Card.Content>
        <Card.Header className='name'>{part.nombre}</Card.Header>
        <Card.Meta>
          <span>{part.descripcion}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content className='price' extra>
        $ {part.precio}
      </Card.Content>

      {selected ? (
        <Button style={{ marginTop: 'auto' }} secondary>
          SELECCIONADO
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleSelect(part);
          }}
          style={{ marginTop: 'auto' }}
          primary
        >
          SELECCIONAR
        </Button>
      )}
    </Card>
  );
};

export default Part;
