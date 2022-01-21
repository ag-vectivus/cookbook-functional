import React from 'react';

interface IInputProps {
  id: string;
  icon?: string;
  type: string;
  label: string;
  handleData: React.Dispatch<React.SetStateAction<string>>;
}

export default IInputProps;
