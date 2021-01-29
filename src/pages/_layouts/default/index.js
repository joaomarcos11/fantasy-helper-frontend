import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

// Em Route existe <Layout>, o que vier dentro dele
// vai ser renderizado em { children }

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <nav>
        <Link to="/myhome" className="logo">FantasyHelper</Link>

        <ul>
          <div className="page-tabs">
            <li>
              <Link to="/mystats">MyStats</Link>
            </li>
            <li>
              <Link to="/mymatchup">MyMatchup</Link>
            </li>
          </div>
          <div className="user-data">
            <li>
              {/* <img src="" alt="" /> */}
              <span>Olá, username</span>
            </li>
            <li>
              <button>Sair</button>
            </li>
          </div>
        </ul>
      </nav>

      <main>
        { children }
      </main>

    </Container>
  );
}