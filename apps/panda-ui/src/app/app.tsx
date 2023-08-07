import styled from 'styled-components';

import { Button } from '@acme-org/design-system';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="panda-ui" /> */}
      <Button>Panda Button</Button>
    </StyledApp>
  );
}

export default App;
