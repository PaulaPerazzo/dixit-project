import React from 'react';
import { InputBox } from './style';

type InputPropTypes = {
  placeholder: string;
  onChange: (value: any) => void;
 
};

const Input: React.FC<InputPropTypes> = ({
  placeholder,
  onChange

}) => {
  return (
    <InputBox placeholder={placeholder} onChange={onChange}/>
  )
};

export default Input;


