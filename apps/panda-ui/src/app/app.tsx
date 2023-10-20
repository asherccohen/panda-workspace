import styled from 'styled-components';

import { Button } from '@acme-org/design-system';
import { css } from '@acme-org/themes/styled-system/css';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="panda-ui" /> */}
      <Button>Panda Button</Button>
      <span className={css({ bgColor: 'blue.300', color: 'white' })}>
        blue.300
      </span>
    </StyledApp>
  );
}

export default App;
