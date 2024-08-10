// DateComponent.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateComponentProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  label: string;
  placeholder: string;
  className?: string;
}

const DateComponent: React.FC<DateComponentProps> = ({ selectedDate, onDateChange, label, placeholder, className }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-bold">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        className={className}
      />
    </div>
  );
};

export default DateComponent;
