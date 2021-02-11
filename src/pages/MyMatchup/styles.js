import styled from 'styled-components';

export const PageContainer = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .stat-label {
    width: 200px;
    text-align: center;
  }

  .stat-input {
    width: 100px;
    /* text-align: right !important; */
  }

  .stat-result-home {
    margin-left: 40px;
    width: 100px;
    text-align: center;
  }

  .stat-result-away {
    margin-right: 40px;
    width: 100px;
    text-align: center;
  }

  .stats-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
