import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';



// RouteWrapper : camada de abstração do Route
// com ela é possível ministrar signed e isPrivate por exemplo

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // Configuração para simular que se está logado

  // const signed = false;
  const signed = true;

  const loading = false;
  // const loading = true;

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if(!signed && isPrivate) {
    return <Redirect to="/" />
  }

  // isPrivate é setado nas rotas que desejo ser privada
  // por default ele é false, por isso !isPrivate
  if(signed && !isPrivate) {
    return <Redirect to="/myhome" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    >
    </Route>
  );
}

// declara o tipo da variável
RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool
};

// declara valor padrão pra variável
RouterWrapper.defaultProps= {
  isPrivate: false,
}