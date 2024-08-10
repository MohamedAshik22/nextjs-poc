
import React from 'react';

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FC<SwitchProps> = ({ label, checked, onChange }) => {
  return (
    <>
    <label className="switch-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="switch-input"
      />
      <span className="switch-slider"></span>
      <span className="switch-label">{label}</span>

    </label>
    </>
  );
};

export default Toggle;
