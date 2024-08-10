import React from 'react';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange, 
  inputClassName = '',
  labelClassName = '',
  containerClassName = '' }) => {
  return (
    <label className={`flex items-center space-x-2 ${containerClassName}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={inputClassName}
      />
      <span className={`text-gray-900 ${labelClassName}`}>{label}</span>
    </label>
  );
};

export default RadioButton;
