import React from 'react';
import { useLocation } from 'react-router-dom';

function Breadcrumb () {
  const location = useLocation()
  const parts = location.pathname.split('/')

  const items = [
    { label: '> Home', url: '/' },
    { label: '> Products', url: '/asignaturas' },
    { label: '> Category', url: '/asignaturas' },
    { label: '> Current Page', url: '/asignaturas' },
  ];
  return (
    <nav className="flex p-10 text-center h-10" aria-label="Breadcrumb">
      <ol className="flex items-start space-x-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className={`text-gray-500 hover:text-gray-700 ${
                index === items.length - 1 ? 'font-bold' : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export {Breadcrumb};