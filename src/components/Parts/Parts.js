import React from 'react';

import { Card, Loader } from 'semantic-ui-react';

import Part from './Part';

import './styles.css';

export const Parts = (parts) => {
  return !parts.length ? (
    <Loader />
  ) : (
    <Card.Group className='cards' centered doubling>
      {parts.map((part) => {
        return <Part part={part} />;
      })}
    </Card.Group>
  );
};
