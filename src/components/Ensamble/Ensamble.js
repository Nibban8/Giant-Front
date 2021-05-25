import React, { useState, useEffect, Fragment } from 'react';
import { Button, Container, Label, Tab, Table } from 'semantic-ui-react';
import { db } from '../../firebase';
import { EnsambleContext } from './EnsambleContext';

import logo from '../Navbar/giant.png';
import Parts from './Parts';
import Steps from '../Steps/Steps';

import html2pdf from 'html2pdf.js';

export default function Ensamble() {
	let precioTotal = 0;
	const [ensamble, setEnsamble] = useState({
		cpu: '',
		mb: '',
		ram: '',
		gpu: '',
		hdd: '',
		ssd: '',
	});

	const tipos = [
		{ nombre: 'Procesador', valor: 'cpu' },
		{ nombre: 'Tarjeta Madre', valor: 'mb' },
		{ nombre: 'Memoria RAM', valor: 'ram' },
		{ nombre: 'Tarjeta Grafica', valor: 'gpu' },
		{ nombre: 'HDD', valor: 'hdd' },
		{ nombre: 'SSD', valor: 'ssd' },
	];

	const panes = tipos.map((tipo, index) => {
		return {
			menuItem: tipo.nombre,
			render: () => (
				<Tab.Pane id={index}>
					<Parts parts={partes.filter((part) => part.tipo === tipo.valor)} />
				</Tab.Pane>
			),
		};
	});

	const resumen = {
		menuItem: 'Resumen',
		render: () => (
			<Fragment>
				{(precioTotal = 0)}
				<div id='tabla'>
					<img alt='logo' src={logo} />
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Concepto</Table.HeaderCell>
								<Table.HeaderCell>Unidades</Table.HeaderCell>
								<Table.HeaderCell>Costo</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{Object.entries(ensamble).map((e) => {
								if (e[1] !== '') {
									precioTotal += parseInt(e[1].precio);
									return (
										<Table.Row>
											<Table.Cell>{e[1].nombre}</Table.Cell>
											<Table.Cell>1</Table.Cell>
											<Table.Cell>${e[1].precio}</Table.Cell>
										</Table.Row>
									);
								}
								return null;
							})}
							<Table.Row>
								<Table.Cell></Table.Cell>
								<Table.Cell>Costo total</Table.Cell>
								<Table.Cell>${precioTotal}</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
					<Label color='blue' style={{ float: 'right' }}>
						Cotización hecha el dia: {getDate()}
					</Label>
				</div>
				<div style={{ paddingTop: '10px' }}>
					<Button size='large' primary onClick={getPDF}>
						Descargar PDF
					</Button>
				</div>
			</Fragment>
		),
	};

	const getPDF = () => {
		const table = document.getElementById('tabla');
		html2pdf().from(table).save();
	};

	const getDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;
		return today;
	};

	const [partes, setPartes] = useState([]);

	const getParts = async () => {
		const querySnapshot = await db.collection('partes').get();
		const docs = [];
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id, selected: false });
		});
		setPartes(docs);
	};

	useEffect(() => {
		getParts();
	}, []);

	useEffect(() => {
		console.log(ensamble);
		//console.log(panes);
	}, [ensamble]);

	useEffect(() => {
		getParts();
	}, []);
	const handleClick = () => {
		let elementQuote, elementPDF, elementTab;
		elementTab = document.getElementsByClassName('active item');
		elementQuote = document.getElementById('stepQuote');
		elementPDF = document.getElementById('stepPDF');
		console.log(elementTab);
		if (elementTab[0].text === 'Resumen') {
			if (elementPDF.classList.contains('active')) {
				return 0;
			} else {
				elementPDF.classList.toggle('active');
				elementQuote.classList.toggle('active');
			}
		} else {
			if (!elementQuote.classList.contains('active')) {
				elementPDF.classList.toggle('active');
				elementQuote.classList.toggle('active');
			}
		}
	};
	return (
		<Container className='content'>
			<Steps />
			<EnsambleContext.Provider value={{ ensamble, setEnsamble }}>
				<Tab
					menu={{
						inverted: true,
						fluid: true,
					}}
					onTabChange={handleClick}
					panes={panes.concat(resumen)}
				/>
			</EnsambleContext.Provider>
		</Container>
	);
}

// la funcion .onSnapshot ofrece datos en tiempo real
// si la base de datos cambia, hace fetch de forma automatica

//   const getParts = async () => {
//     db.collection('partes').onSnapshot((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//       });
//     });
//   };
