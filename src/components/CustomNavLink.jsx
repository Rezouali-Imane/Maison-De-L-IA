import { NavLink } from 'react-router-dom';
import React from 'react';

export function CustomNavLink({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-silkscreen text-sm font-bold transition-colors relative group ${className} ${
          isActive ? "text-[rgba(63,95,183,1)]" : "text-[rgba(255,255,255,0.87)] hover:text-white"
        }`
      }
    >
      {children}
      <span
        className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
        aria-hidden="true"
      ></span>
    </NavLink>
  );
}
