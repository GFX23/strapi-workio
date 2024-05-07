import React, { InputHTMLAttributes } from "react";

type Props = {
  placeholder: string;
  type: string;
  requiredSign?: boolean;
  name: string;
};

export const Input: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({placeholder="Vložte placeholder", requiredSign = true, type, name, ...props}) => {
  return (
    <div className="relative h-12 w-full min-w-[200px]">
      <input
        placeholder="Standard"
        type={type}
        {...props}
        name={name}
        className="peer h-full w-full border-2 border-wblue-200 focus:bg-white rounded-md bg-transparent pt-4 pl-[10px] text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0"
      />
      <label htmlFor={name} className="after:content[''] pointer-events-none absolute left-3 peer-placeholder-shown:-top-[5px]  peer-focus:top-[7px] top-[7px] flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:w-full after:scale-x-0  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-wblue-500 peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {placeholder}
      </label>
      {requiredSign && (
        <label className="text-wblue-500 absolute right-1.5 top-0.5">*</label>
      )}
    </div>
  );
}