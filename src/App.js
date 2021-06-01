import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Agregar from './components/Pages/Agregar';
import Finalizada from './components/Pages/Finalizada';
import { AuthProvider } from './AuthContext';
import { Router, Route, Redirect } from 'react-router';
import history from './history';
import Admin from './components/Pages/Admin';
import Pedidos from './Pedidos';
import Inventario from './Inventario';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Ensamble from './components/Ensamble/Ensamble';

import './App.css';

const App = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	//   dispatch(getParts());
	// }, [dispatch]);

	return (
		<Fragment>
			<Router history={history}>
				<AuthProvider>
					<Navbar />

					<div className='main'>
						<Route path='/' exact component={() => <Redirect to='/inicio' />} />
						<Route path='/inicio' exact component={Home} />
						<Route path='/agregar' exact component={Agregar} />
						<Route path='/contacto' exact component={Contact} />
						<Route path='/ensamble' exact component={Ensamble} />
						<Route path='/finalizada' exact component={Finalizada} />
						<PrivateRoute exact path='/admin' component={Admin} />
						<Route path='/login' exact component={Login} />
						<Route path='/admin/inventario' exact component={Inventario} />
						<Route path='/admin/pedidos' exact component={Pedidos} />
					</div>
				</AuthProvider>
			</Router>
		</Fragment>
	);
};

export default App;
