import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Label } from 'semantic-ui-react'

// import {
//   Button,
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';

import { Container } from './styles';

// Em Route existe <Layout>, o que vier dentro dele
// vai ser renderizado em { children }

export default function DefaultLayout({ children }) {
  const [activeItem, setActiveItem] = React.useState('myhome');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Menu.Item
            name='myhome'
            active={activeItem === 'myhome'}
            onClick={handleItemClick}
          >
            <Link to='/myhome'>
              MyHome
            </Link>
          </Menu.Item>

          <Dropdown text='MyStats' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='addstats'>
                  Adicionar Stats
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='reviewstats'>
                  Analisar Stats
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name='mymatchup'
            active={activeItem === 'mymatchup'}
            onClick={handleItemClick}
          >
            <Link to='/mymatchup'>
              MyMatchup
            </Link>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <div>
                <Label as='a' image>
                  <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                  jm_belomaioral
                </Label>
              </div>
            </Menu.Item>

            <Menu.Item
              name='sair'
              active={activeItem === 'sair'}
              onClick={handleItemClick}
            />

          </Menu.Menu>
        </Menu>
      </nav>
      <main>
        {children}
      </main>
    </Container>
  );
}


// export default function DefaultLayout(props) {
// export default function DefaultLayout({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
  
//   return (
//     <Container>
//       <nav>
//         <Navbar color="dark" light expand="md">
//           <NavbarBrand className="mx-5">
//             <Link to="/myhome">
//               FantasyHelper
//             </Link>
//           </NavbarBrand>
//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink className="mr-2">
//                   <Link to="/mystats">
//                     MyStats
//                   </Link>
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink className="ml-2">
//                   <Link to="/mymatchup">
//                     MyMatchup
//                   </Link>
//                 </NavLink>
//               </NavItem>
//             </Nav>
//             <Nav className="ml-auto d-flex align-items-center" navbar>
//               <NavbarText className="text-white mr-4">Olá, username</NavbarText>
//               <NavItem className="mr-5">
//                   <Button outline color="danger">Sair</Button>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </nav>

//       <main>
//         {children}
//       </main>
//     </Container>
//   );
// }

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

// NavbarBrand.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

// NavbarText.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }



// export default function DefaultLayout({ children }) {
//   return (
//     <Container>
//       <nav>
//         <Link to="/myhome" className="logo">FantasyHelper</Link>

//         <ul>
//           <div className="page-tabs">
//             <li>
//               <Link to="/mystats">MyStats</Link>
//             </li>
//             <li>
//               <Link to="/mymatchup">MyMatchup</Link>
//             </li>
//           </div>
//           <div className="user-data">
//             <li>
//               {/* <img src="" alt="" /> */}
//               <span>Olá, username</span>
//             </li>
//             <li>
//               <button>Sair</button>
//             </li>
//           </div>
//         </ul>
//       </nav>

//       <main>
//         { children }
//       </main>

//     </Container>
//   );
// }