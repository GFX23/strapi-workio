import React from "react";

type Props = {
  placeholder: string;
  type: string;
  required: boolean;
};

export const TextArea: React.FC<Props> = ({placeholder="Vložte placeholder", required}) => {
  return (
    <div className="relative max-h-[148px] h-[148px] w-full min-w-[200px]">
      <textarea
        placeholder="Standard"
        className="peer resize-none focus:bg-white h-full w-full border-2 border-wblue-200 rounded-md bg-transparent pt-5 pl-[10px] text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0"
      />
      <label className="after:content[''] pointer-events-none absolute left-3 peer-placeholder-shown:-top-[10px]  peer-focus:top-[7px] top-[7px] flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:w-full after:scale-x-0  after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-wblue-500 peer-focus:after:scale-x-100  peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {placeholder}
      </label>
      {required && (
        <label className="text-wblue-500 absolute right-1.5 top-0.5">*</label>
      )}
    </div>
  );
}