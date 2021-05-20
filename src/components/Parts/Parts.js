import React from 'react';

import { Loader, Grid } from 'semantic-ui-react';

import Part from './Part';

import './styles.css';

const Parts = ({ parts, handleSelect, selected }) => {
  return !parts.length ? (
    <Loader />
  ) : (
    <Grid doubling columns={3} className='cards' centered>
      {parts.map((part) => {
        //console.log(selected.indexOf(part) > -1);

        return selected.indexOf(part) > -1 ? (
          <Part
            selected={true}
            handleSelect={handleSelect}
            key={part.id}
            part={part}
          />
        ) : (
          <Part
            selected={false}
            handleSelect={handleSelect}
            key={part.id}
            part={part}
          />
        );
      })}
    </Grid>
  );
};

export default Parts;
