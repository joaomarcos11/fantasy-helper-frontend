import styled from 'styled-components';

export const Container = styled.div`
  display: flex ;
  flex-direction: column;
  min-height: 100vh; 

  nav {
    display: flex;
    background-color: var(--color-bg-primary);
    /* background-color: red; */
    justify-content: space-between;
    align-items: center;

    font-size: 1.8rem;

    .logo {
      margin-left: 16.8rem;
    } //.logo

    ul {
      display: flex;

      margin-right: 16.8rem;
      /* justify-content: space-between; */
      /* margin-right: 16.8rem; */

      /* li {
        padding: 1rem 2rem;
      } */

      .page-tabs {
        display: flex;
        align-items: center;
        border: 0.5px solid red;

        margin-right: 12rem;

        li + li {
          margin-left: 6rem;
        }
        
        a {
          padding: 1rem 2rem;
        }

        a:hover {
          background-color: var(--color-bg-secondary);
        }
      } // .page-tabs

      .user-data {
        display: flex;
        border: 0.5px solid red;

        font-size: 1.4rem;

        li {
          padding: 1rem 2rem;
        }

        li + li {
          margin-left: 4rem;
        }
      } // .user-data
    } // ul
  }


`;