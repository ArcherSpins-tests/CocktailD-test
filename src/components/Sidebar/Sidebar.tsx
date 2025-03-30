import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const cocktails = ['margarita', 'mojito', 'a1', 'kir'];

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {cocktails.map((c) => (
        <NavLink
          key={c}
          to={`/${c}`}
          className={({ isActive }) =>
            isActive ? 'sidebar-item active' : 'sidebar-item'
          }
        >
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </NavLink>
      ))}
    </div>
  );
};
