import React from 'react';
import { RiMapPinFill } from 'react-icons/ri';
import TextInput from './TextInput';


const LocationField: React.FC = () => {
  return (
    <div className="mb-4">
      <label htmlFor="location" className="block text-md font-bold text-gray-700">
        Location
      </label>
      <div className="flex">
        {/* <input
          type="text"
          id="location"
          placeholder="Enter the Address"
          className="location-input"
        /> */}
        <TextInput
          type="text"
          name="location"
          placeholder="Enter the Address"
          className="location-input"
        />
        
        <button
          type="button"
          className="location-btn"
          style={{ height: 'calc(2.5rem + 2px)' }}
        >
          <RiMapPinFill className="mr-2" />
          Enter Address
        </button>
      </div>
    </div>
  );
};

export default LocationField;
