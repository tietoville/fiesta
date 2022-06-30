import * as React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';
import Layout from './containers/Layout';
import Dashboard from './containers/Dashboard';
import Projects from './containers/Projects';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='projects' element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
