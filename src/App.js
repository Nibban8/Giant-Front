import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import Contact from './components/Pages/Contact';
import Agregar from './components/Pages/Agregar';
import { Router, Route, Redirect } from 'react-router';
import history from './history';

import Ensamble from './components/Forms/Ensamble';

import './App.css';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getParts());
  // }, [dispatch]);

  return (
    <Fragment>
      <Router history={history}>
        <Navbar />
        <div className="main">
          <Route path='/' exact component={() => <Redirect to='/inicio' />} />
          <Route path='/inicio' exact component={Home} />
          <Route path='/cotizar' exact component={Quote} />
          <Route path='/agregar' exact component={Agregar} />
          <Route path='/contacto' exact component={Contact} />
          <Route path='/ensamble' exact component={Ensamble} />
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
