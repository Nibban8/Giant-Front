import React from 'react';

import { Card, Image } from 'semantic-ui-react';

const Part = ({ part }) => {
  // const part = {
  //   nombre: 'Ryzen 7 3800X',
  //   marca: 'AMD',
  //   tipo: 'procesador',
  //   interface: 'AM4',
  //   tags: ['3.90GHz', '8-Core', '32MB L3 Cache'],
  //   selectedFile:
  //     'https://www.xtremetecpc.com/wp-content/uploads/2019/11/7-3800X.jpg',
  // };
  return (
    <Card>
      <Image src={part.selectedFile} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{part.nombre}</Card.Header>
        <Card.Meta>
          <span>{part.marca}</span>
        </Card.Meta>
        <Card.Description>{part.tags}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Part;
