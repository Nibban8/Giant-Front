import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Loader } from 'semantic-ui-react';

import Part from './Part';

import './styles.css';

export const Parts = () => {
  const parts = useSelector((state) => state.parts);

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
