import React from 'react';

interface InputProps {
  type?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label?: string;
  big?: boolean;
}

export default function Input({
  type,
  checked,
  onChange,
  name,
  id,
  label,
  big,
}: InputProps) {
  return (
    <div className={`flex items-center ${big ? 'pb-4' : 'pb-2'}`}>
      <input
        type={type || 'checkbox'}
        id={id}
        checked={checked}
        onChange={onChange}
        name={name}
        className={`mr-2 cursor-pointer`}
      />
      <label htmlFor={id} className="text-black">
        {label}
      </label>
    </div>
  );
}
