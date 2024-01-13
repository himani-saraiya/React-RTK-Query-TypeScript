import { ErrorMessage } from 'formik';
import React from 'react';

export type TextFieldProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ATMTextField: React.FC<TextFieldProps> = ({ label, name, value, placeholder, required, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
      className='rounded focus:border-e-red-500 grid-cols-2 flex flex-col space-y-4 w-full h-11'
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}

      />
      <ErrorMessage name={name}>
        {(err)=>(
          <p style={{color:"red"}}>{err}</p>
        )}
      </ErrorMessage>
      
    </div>
  );
};

export default ATMTextField;