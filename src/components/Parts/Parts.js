import React from 'react';

import {  Loader, Grid } from 'semantic-ui-react';

import Part from './Part';

import './styles.css';

const Parts = ({ parts }) => {
  return !parts.length ? (
    <Loader />
  ) : (
    <Grid doubling columns={3} className='cards' centered>
      {parts.map((part) => {
        return <Part part={part} />;
      })}
    </Grid>
  );
};

export default Parts;
