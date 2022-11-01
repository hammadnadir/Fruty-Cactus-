import React from "react";

const Contact_text = ({ label, name, value, handleChange, ...props }) => {
  return (
    <div>
      <input
        value={value}
        name={name}
        onChange={handleChange}
        {...props}
        className="bg-gray-100 focus:outline-none rounded-md h-[41px] mb-[20px] w-full px-[15px]"
        placeholder={label}
        required
      />
    </div>
  );
};

export default Contact_text;
