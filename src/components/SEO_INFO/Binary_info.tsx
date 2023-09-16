import React from "react";

interface Binary_info_props {
  title: string;
  value: boolean;
}

const Binary_info: React.FC<Binary_info_props> = ({ title, value }) => {
  return (
    <div
      className={`max-w-[30vw] min-h-[5vh] p-2 font-bold text-xl border-2 rounded-full flex items-center justify-center  ${
        value ? "text-green-600" : "text-red-800"
      } ${value ? "border-green-600" : "border-red-800"}`}
    >
      {title}
    </div>
  );
};

export default Binary_info;
