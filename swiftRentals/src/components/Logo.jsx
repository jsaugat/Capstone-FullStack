import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      {/* icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64 0H199V135H190.196V67.5C190.196 35.0833 163.917 8.80435 131.5 8.80435C99.0833 8.80435 72.8044 35.0832 72.8044 67.5V135H64V0ZM136 65V200H1L1.00001 65H9.80436V132.5C9.80435 164.917 36.0833 191.196 68.5 191.196C100.917 191.196 127.196 164.917 127.196 132.5V65H136Z"
          fill="black"
        />
      </svg>
      {/* text */}
      <NavLink to="">
        <span className="text-5xl font-semibold">Swift Rentals</span>
      </NavLink>
    </div>
  );
}

export default Logo;
