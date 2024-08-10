import React, { useState } from "react";

interface DropdownProps {
  label?: string;
  name: string;
  options: string[];
  placeholder?: string;
  values?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  placeholder = "Select an option",
  values,
  onChange,
}) => {
  const [value, setValue] = useState(values || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="group-dropdown">
      <div className="flex">
        <div className="flex-grow">
          <label>{label}</label>
        </div>
      </div>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="dropdown-select bg-white"
        >
          <option value="" disabled selected={value === ""}>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
