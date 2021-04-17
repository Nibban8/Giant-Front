import React, { useEffect } from 'react';
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
      <h1>El giant ensambles</h1>

      <AddPart />
    </div>
  );
};

export default App;
