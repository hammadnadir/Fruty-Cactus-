import React from "react";

const Contact_text = ({ label, name, value, handleChange, ...props }) => {
  return (
    <div>
      <input
        value={value}
        name={name}
        onChange={handleChange}
        {...props}
        className="bg-gray-100 focus:outline-none rounded-md ml-[23px] mr-[23px] sm:ml-[106px] md:ml-[106px] mt-[16px] w-[328px] h-[41px] px-3"
        placeholder={label}
        required
      />
    </div>
  );
};

export default Contact_text;
