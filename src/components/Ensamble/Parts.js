import React, { useContext } from 'react';
import { Loader, Grid } from 'semantic-ui-react';
import Part from './Part';
import './styles.css';
import { EnsambleContext } from './EnsambleContext';

const Parts = ({ parts }) => {
	const { ensamble } = useContext(EnsambleContext);
	return !parts.length ? (
		<Loader />
	) : (
		<Grid doubling columns={4} className='cards' centered>
			{parts.map((part) => {
				return Object.values(ensamble).indexOf(part) > -1 ? (
					<Part selected={true} key={part.id} part={part} />
				) : (
					<Part
						selected={false}
						key={part.id}
						part={part}
						stock={part.cantidad}
					/>
				);
			})}
		</Grid>
	);
};
// Esa funcion retorna true cuando encuentra una parte en el arreglo del ensamble y false si no...
// Seguro que con otra estructura de datos es mejor c:
// Que te valga verga la estructura de datos, fuga por ese 100

export default Parts;
