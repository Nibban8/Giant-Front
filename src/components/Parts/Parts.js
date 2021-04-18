import React from 'react';
import { useSelector } from 'react-redux';
import { CardGroup, Loader } from 'semantic-ui-react';

import Part from './Part';

export const Parts = () => {
  const parts = useSelector((state) => state.parts);

  return !parts.length ? (
    <Loader />
  ) : (
    <CardGroup>
      {parts.map((part) => {
        return <Part part={part} />;
      })}
    </CardGroup>
  );
};
