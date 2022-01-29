import React from 'react';

/**
 * Spacer component
 */

interface SpacerProps {
  value?: string;
}
export const Spacer: React.FC<SpacerProps> = (props) => {
  return <div style={{ padding: props.value ?? '5px' }}></div>;
};

export default Spacer;
