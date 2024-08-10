import React, { useState } from 'react';
import TextInput from './TextInput';
import Toggle from './Toggle';

const OnlineField: React.FC = () => {

  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isLoopToggled, setIsLoopToggled] = useState<boolean>(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked);
  };

  const handleLoopToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoopToggled(event.target.checked);
  };

  return (
    <>
      <div>
        You can add video meeting rooms or streams after you created a draft of the event.
      </div>

      <div className='py-2 text-sm mt-2'>
        <TextInput
          label="Public Stream Video-ID"
          type="text"
          name="example"
        />
      </div>

      <div className='flex space-x-4'>
        <Toggle
          label="Autoplay"
          checked={isToggled}
          onChange={handleToggleChange}
        />

        <Toggle
          label="Loop"
          checked={isLoopToggled}
          onChange={handleLoopToggleChange}
        />
      </div>

    </>
  )
};

export default OnlineField;