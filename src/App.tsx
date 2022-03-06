/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ShoppingCart } from './pages/ShoppingCart';
import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
