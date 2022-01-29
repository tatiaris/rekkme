import React from 'react';
import { useState } from 'react';

/**
 * StringInput component
 */
interface StringInputDataInterface {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  format?: string;
  fill?: boolean;
  helperText?: string;
  errMsg?: string;
}
interface StringInputProps {
  config: StringInputDataInterface;
  value?: string;
  updateFunc: any;
}
export const StringInput: React.FC<StringInputProps> = (props) => {
  const [visited, setVisited] = useState(false);
  const config = props.config;
  const re = new RegExp(config.format);
  return (
    <div className={`input-container ${config.fill ? 'fill' : ''}`}>
      <h5>{config.label}:</h5>
      <input onChange={(e) => props.updateFunc(e.target.value)} onFocus={() => setVisited(true)} placeholder={config.placeholder} type={config.type} id={config.name} name={config.name} />
      {visited && config.format?.length > 0 && !re.test(props.value) && <div style={{ color: 'red' }}>{config.errMsg ? config.errMsg : 'Invalid value'}</div>}
      {config.helperText?.length > 0 && <div className="input-helper-text">{config.helperText}</div>}
    </div>
  );
};

export default StringInput;
