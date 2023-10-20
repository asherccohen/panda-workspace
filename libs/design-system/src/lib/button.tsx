import { css } from '@acme-org/themes/styled-system/css';
import { PropsWithChildren } from 'react';

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className={css({ bg: 'yellow.300', px: '2', py: '3' })}
    >
      {children}
    </button>
  );
}

export default Button;
