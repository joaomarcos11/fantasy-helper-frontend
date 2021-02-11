import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 92vh;
  background-image: url(${props => props.imgBg});
  background-size: cover;

  display: flex;
  align-items: center;
  opacity: 0.8;

  .text-bg {
    color: white;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    padding: 50px 100px;
    background-color: #000;
    /* opacity: 0.5; */

    p {
      opacity: 1;
    }
  }

`;