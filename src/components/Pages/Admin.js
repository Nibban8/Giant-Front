import React, { Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<Fragment>
			<Grid
				style={{
					position: 'fixed',
					top: '50%',
					width: '100%',
				}}
				centered
				columns={4}
			>
				<Button primary size='massive' as={Link} to={'/admin/inventario'}>
					Inventario
				</Button>
				<Button primary size='massive' as={Link} to={'/admin/pedidos'}>
					Pedidos
				</Button>
			</Grid>
		</Fragment>
	);
}
