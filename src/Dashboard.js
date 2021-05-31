import React from 'react';

import Inventario from './Inventario';
import { Grid, Segment } from 'semantic-ui-react';
import Pedidos from './Pedidos';

export default function Dashboard() {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Inventario />
        </Grid.Column>
        <Grid.Column>
          <Pedidos />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
