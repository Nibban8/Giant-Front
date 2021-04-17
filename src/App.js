import React, { useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';

import Parts from './components/Parts/Parts';
import AddPart from './components/Forms/AddPart';
import { getParts } from './actions/parts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Container>
        <h1>El giant ensambles</h1>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Parts />
            </Grid.Column>
            <Grid.Column>
              <AddPart />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
