import React, { useState, useEffect } from 'react';
import { List, Segment } from 'semantic-ui-react';
import { db } from '../../firebase';
export default function Inventario() {
	const [partes, setPartes] = useState([]);

	const getParts = async () => {
		const querySnapshot = await db.collection('partes').get();
		const docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setPartes(docs);
	};

	useEffect(() => {
		getParts();
	}, []);

	return (
		<>
			<Segment>
				<List divided verticalAlign='middle'>
					{partes.map((parte) => {
						let lista;
						if (parte.cantidad === '0') {
							lista = (
								<List.Item>
									<List.Content>{parte.nombre}</List.Content>
								</List.Item>
							);
						}
						return lista;
					})}
				</List>
			</Segment>
		</>
	);
}
