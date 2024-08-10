// TimeComponent.tsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TimeComponentProps {
  selectedTime: Date | null;
  onTimeChange: (time: Date | null) => void;
  label: string;
  placeholder: string;
  className?: string;
}

const TimeComponent: React.FC<TimeComponentProps> = ({ selectedTime, onTimeChange, label, placeholder, className }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-bold">{label}</label>
      <DatePicker
        selected={selectedTime}
        onChange={onTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        placeholderText={placeholder}
        className={className}
      />
    </div>
  );
};

export default TimeComponent;
