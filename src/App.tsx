import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

const App: FC = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </DefaultLayout>
  );
}

export default App;
