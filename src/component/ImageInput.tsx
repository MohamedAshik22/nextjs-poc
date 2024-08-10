// ImageInput.tsx
import React, { useState, ChangeEvent } from 'react';
import { IconType } from 'react-icons';

interface ImageInputProps {
  onImageChange: (file: File | null) => void;
  placeholder: string;
  IconComponent: IconType;
  className?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange, placeholder, IconComponent, className}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onImageChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <label className="title">
        <IconComponent className="icon" />
        <span className={className}>{placeholder}</span>
        <span className="text-sm text-gray-500">(Click or Drag-and-Drop)</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      {preview && (
        <img src={preview} alt="Preview" className="preview" />
      )}
    </div>
  );
};

export default ImageInput;