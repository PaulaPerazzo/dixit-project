import React from 'react';
import { InputBox } from './style';

type InputPropTypes = {
  placeholder: string;
};

const Input: React.FC<InputPropTypes> = ({
  placeholder,
}) => {
  return (
    <InputBox placeholder={placeholder} />
  )
};

export default Input;
