import React from 'react';
import {useSelector} from 'react-redux';

import createRouter from './routes';

export default function App() {
  // pega a informação de está logado
  const signed = useSelector(state => state.auth.signed);

  // função para enviar o estado do usuário
  const Routes = createRouter(signed);

  return <Routes />;
}
