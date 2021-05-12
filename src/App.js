import React, { useEffect } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import Home from "./components/Pages/Home";
import Quote from "./components/Pages/Quote";
import Contact from "./components/Pages/Contact";
import AddPart from './components/Forms/AddPart';
import { getParts } from './actions/parts';
import { Parts } from './components/Parts/Parts';
import { Router,Route, Redirect } from 'react-router';
import history from './history';
import BackgroundImage from './components/Pages/Background/BackgroundImage';
import ComposedColorBackground from './components/Pages/Background/ComposedColorBackground';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  return (
    <div>
        <BackgroundImage/>
        <ComposedColorBackground/>
        <Router history={history}>
          <div>
            <Navbar />
              <Route
                path="/"
                exact
                component={()=><Redirect to='/inicio'/>}
                />
              <Route
                path="/inicio"
                exact
                component={Home}
                />
              <Route 
                path="/cotizar"
                exact
                component={Quote}
                />
              <Route
                path='/contacto'
                exact
                component={Contact}
                />
          </div>
          </Router>
        Hola holaaaaaaaaaaaaaaaa
    </div>
  );
};

export default App;

     {/* <Container>
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
          </Container> */}