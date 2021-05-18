import React from 'react';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Pages/Home';
import Quote from './components/Pages/Quote';
import Contact from './components/Pages/Contact';
import Agregar from './components/Pages/Agregar';
import { Router, Route, Redirect } from 'react-router';
import history from './history';

import './App.css';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getParts());
  // }, [dispatch]);

  return (
    <div>
      <Router history={history}>
        <Navbar />
        <div className='main backgroundimages'>
          <Route path='/' exact component={() => <Redirect to='/inicio' />} />
          <Route path='/inicio' exact component={Home} />
          <Route path='/cotizar' exact component={Quote} />
          <Route path='/agregar' exact component={Agregar} />
          <Route path='/contacto' exact component={Contact} />
        </div>
      </Router>
    </div>
  );
};

export default App;
